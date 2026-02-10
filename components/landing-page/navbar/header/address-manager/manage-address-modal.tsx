"use client"

import { useState, useEffect } from "react"
import { X, Home, Briefcase } from "lucide-react"
import { useRouter } from "next/navigation"
// import { getUserAddresses, setDefaultAddress, deleteUserAddress } from "@/lib/actions/user-actions"
import SuccessDialog from "./success-dialog"
import DeleteConfirmDialog from "./delete-confirm-dialog"
import EditAddressForm from "./edit-address-form"
import CurrentDeliveryAddressModal from "./current-delivery-address-modal"
import AddAddressForm from "../location-modal/address-form"

// Database format (from API)
interface Address {
  id: string
  type: string
  name: string
  addressLine1: string
  addressLine2: string | null
  city: string
  postalCode: string
  state: string
  mobileNumber: string
  isDefault: boolean
}

// Display format (for UI components)
interface DisplayAddress {
  id: string
  type: "home" | "work"
  name: string
  address: string
  phone: string
  isDefault: boolean
}

interface ManageAddressModalProps {
  onClose: () => void
    onOpenManager: () => void

}

export default function ManageAddressModal({ onOpenManager, onClose }: ManageAddressModalProps) {
  const router = useRouter()
  const [addresses, setAddresses] = useState<Address[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showCurrentAddress, setShowCurrentAddress] = useState(false)
  const [showAddAddressForm, setShowAddAddressForm] = useState(false)

  useEffect(() => {
    loadAddresses()
  }, [])

  const loadAddresses = async () => {
    setIsLoading(true)
    try {
      const result = await getUserAddresses()
      if (result.success && result.addresses) {
        setAddresses(result.addresses)
      }
    } catch (error) {
      console.error("Failed to load addresses:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const defaultAddress = addresses.find((addr) => addr.isDefault)

  const formatAddress = (address: Address): string => {
    const parts = [
      address.addressLine1,
      address.addressLine2,
      address.city,
      `${address.state} - ${address.postalCode}`,
    ].filter(Boolean)
    return parts.join("\n")
  }

  const handleSetDefault = async (id: string) => {
    try {
      const formData = new FormData()
      formData.append('addressId', id)
      const result = await setDefaultAddress(formData)
      
      if (result.error) {
        setSuccessMessage(result.error)
        return
      }

      await loadAddresses()
      router.refresh()
      setSuccessMessage("Your Default Address Has Been Updated.")
    } catch (error) {
      setSuccessMessage("Failed to update default address. Please try again.")
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const formData = new FormData()
      formData.append('addressId', id)
      const result = await deleteUserAddress(formData)
      
      if (result.error) {
        setSuccessMessage(result.error)
        setDeleteConfirm(null)
        return
      }

      await loadAddresses()
      router.refresh()
      setDeleteConfirm(null)
      setSuccessMessage("The Address Has Been Removed From Your Saved List.")
    } catch (error) {
      setSuccessMessage("Failed to delete address. Please try again.")
      setDeleteConfirm(null)
    }
  }

  const handleEditSave = async () => {
    setEditingId(null)
    await loadAddresses()
    router.refresh()
    setSuccessMessage("Your Address Has Been Updated And Set As The Default Delivery Location.")
  }

  const handleAddAddress = async () => {
    setShowAddAddressForm(false)
    setShowCurrentAddress(false)
    await loadAddresses()
    router.refresh()
    setSuccessMessage("Your New Address Has Been Added Successfully.")
  }

  if (showCurrentAddress && defaultAddress) {
    return (
      <>
        <CurrentDeliveryAddressModal
          address={{
            id: defaultAddress.id,
            type: defaultAddress.type.toLowerCase() as "home" | "work",
            name: defaultAddress.name,
            address: formatAddress(defaultAddress),
            phone: defaultAddress.mobileNumber,
            isDefault: defaultAddress.isDefault,
          }}
          onChangeAddress={() => {
            setShowCurrentAddress(false)
            setEditingId(defaultAddress.id)
          }}
          onAddNewAddress={() => {
            setShowCurrentAddress(false)
            setShowAddAddressForm(true)
          }}
          onClose={() => setShowCurrentAddress(false)}
        />
        {editingId && (
          <EditAddressForm
            address={{
              id: defaultAddress.id,
              type: defaultAddress.type.toLowerCase() as "home" | "work",
              name: defaultAddress.name,
              address: formatAddress(defaultAddress),
              phone: defaultAddress.mobileNumber,
              isDefault: defaultAddress.isDefault,
            }}
            onClose={() => {
              setEditingId(null)
              setShowCurrentAddress(true)
            }}
            onSave={handleEditSave}
          />
        )}
      </>
    )
  }

  if (showAddAddressForm) {
    return (
      <div className="fixed inset-0 z-[99] bg-[#0016144D] backdrop-blur-[11.4px] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-[710px] w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[22px] font-semibold">Add New Address</h2>
              <button
                onClick={() => {
                  setShowAddAddressForm(false)
                  setShowCurrentAddress(true)
                }}
                className="p-1 border border-[#9E9E9E] rounded-[2px]"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <AddAddressForm onSuccess={handleAddAddress} />
          </div>
        </div>
      </div>
    )
  }

  if (editingId) {
    const addressToEdit = addresses.find((a) => a.id === editingId)
    if (!addressToEdit) {
      setEditingId(null)
      return null
    }
    return (
      <EditAddressForm
        address={{
          id: addressToEdit.id,
          type: addressToEdit.type.toLowerCase() as "home" | "work",
          name: addressToEdit.name,
          address: formatAddress(addressToEdit),
          phone: addressToEdit.mobileNumber,
          isDefault: addressToEdit.isDefault,
        }}
        onClose={() => setEditingId(null)}
        onSave={handleEditSave}
      />
    )
  }


  return (
    <>
      <div className="fixed inset-0 z-[99] bg-[#0016144D] backdrop-blur-[11.4px] flex items-center justify-center p-4 ">
        <div className="bg-white rounded-lg max-w-[513px] w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 sticky top-0 bg-white 
          ">
            <div>
              <h2 className="text-[22px] font-semibold ">Manage Delivery Address</h2>
              <p className="text-[14px]  text-[#9E9E9E] mb-2">Add, Edit, Or Delete Your Delivery Address</p>
            </div>

            <button onClick={onClose} className="p-1 border border-[#9E9E9E] rounded-[2px] ">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="border border-[#9E9E9E] mx-4 " ></div>


          {/* Content */}
          <div className="p-6 space-y-6 ">
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Loading addresses...</p>
              </div>
            ) : addresses.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">No addresses saved yet.</p>
                <button
                  onClick={() => setShowAddAddressForm(true)}
                  className="bg-[#8BC34A] text-white py-2 px-4 rounded-[10px]"
                >
                  Add Your First Address
                </button>
              </div>
            ) : (
              <>
                {/* Default Delivery Address */}
                <div>
                  <h3 className="text-[16px] font-semibold text-[#9E9E9E] mb-4">Default Delivery Address</h3>
                  {addresses
                    .filter((addr) => addr.isDefault)
                    .map((address) => (
                      <AddressCard
                        key={address.id}
                        address={{
                          id: address.id,
                          type: address.type.toLowerCase() as "home" | "work",
                          name: address.name,
                          address: formatAddress(address),
                          phone: address.mobileNumber,
                          isDefault: address.isDefault,
                        }}
                        isDefault={true}
                        onEdit={() => setEditingId(address.id)}
                        onDelete={() => setDeleteConfirm(address.id)}
                        onSetDefault={() => handleSetDefault(address.id)}
                      />
                    ))}
                </div>

                {/* Saved Addresses */}
                {addresses.filter((addr) => !addr.isDefault).length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Saved Addresses</h3>
                    <div className="space-y-4">
                      {addresses
                        .filter((addr) => !addr.isDefault)
                        .map((address) => (
                          <AddressCard
                            key={address.id}
                            address={{
                              id: address.id,
                              type: address.type.toLowerCase() as "home" | "work",
                              name: address.name,
                              address: formatAddress(address),
                              phone: address.mobileNumber,
                              isDefault: address.isDefault,
                            }}
                            isDefault={false}
                            onEdit={() => setEditingId(address.id)}
                            onDelete={() => setDeleteConfirm(address.id)}
                            onSetDefault={() => handleSetDefault(address.id)}
                          />
                        ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Add New Address Button */}
            <button
             onClick={() => setShowCurrentAddress(true)}
             className="w-full bg-[#8BC34A] text-white  py-3 px-4 rounded-[10px] ">
              Add New Address
            </button>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      {successMessage && <SuccessDialog message={successMessage} onClose={() => setSuccessMessage(null)} />}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <DeleteConfirmDialog onConfirm={() => handleDelete(deleteConfirm)} onCancel={() => setDeleteConfirm(null)} />
      )}
    </>
  )
}

interface AddressCardProps {
  address: DisplayAddress
  isDefault: boolean
  onEdit: () => void
  onDelete: () => void
  onSetDefault: () => void
}

function AddressCard({ address, isDefault, onEdit, onDelete, onSetDefault }: AddressCardProps) {
  return (
    <div className="border-[1px] border-[#344D1B] rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {address.type === "home" ? (
            <Home className="w-6 h-6 text-gray-600" />
          ) : (
            <Briefcase className="w-6 h-6 text-gray-600" />
          )}
          <div>
            <h4 className="font-semibold text-gray-900 capitalize">{address.type}</h4>
          </div>
        </div>
        {isDefault && <span className="bg-[#8BC34A] text-white text-xs font-bold px-3 py-1 rounded-full">Default</span>}
      </div>
      <p className="text-sm text-gray-600">{address.name}</p>
      <p className="text-sm text-gray-600 mb-2 whitespace-pre-line">{address.address}</p>
      <p className="text-sm text-gray-600 mb-4">
        <input type="checkbox" className="mr-2" />
        {address.phone}
      </p>

      <div className="flex items-center gap-10 border-t border-gray-200 pt-3">
        {!isDefault && (
          <button
            onClick={onSetDefault}
            className="mr-auto bg-[#8BC34A] text-white font-bold py-3 px-4 rounded-[10px] text-sm transition"
          >
            Set As Default Address
          </button>
        )}
        <button
          onClick={onEdit}
          className="flex items-center hover:text-[#8BC34A] gap-2 mr-4  font-medium text-sm"
        >
          <div className="w-4 h-4 hover:text-[#8BC34A]" >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 13.3359H14" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 2.33609C11.2652 2.07087 11.6249 1.92188 12 1.92188C12.1857 1.92188 12.3696 1.95845 12.5412 2.02953C12.7128 2.1006 12.8687 2.20477 13 2.33609C13.1313 2.46741 13.2355 2.62331 13.3066 2.79489C13.3776 2.96647 13.4142 3.15037 13.4142 3.33609C13.4142 3.52181 13.3776 3.7057 13.3066 3.87728C13.2355 4.04887 13.1313 4.20477 13 4.33609L4.66667 12.6694L2 13.3361L2.66667 10.6694L11 2.33609Z" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </div>
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 text-[#9E9E9E] hover:text-[#D32F2F]  font-medium text-sm"
        >
          <div className="w-4 h-4 hover:text-[#D32F2F] " >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.66675 14C4.30008 14 3.9863 13.8696 3.72541 13.6087C3.46453 13.3478 3.33386 13.0338 3.33341 12.6667V4H2.66675V2.66667H6.00008V2H10.0001V2.66667H13.3334V4H12.6667V12.6667C12.6667 13.0333 12.5363 13.3473 12.2754 13.6087C12.0145 13.87 11.7005 14.0004 11.3334 14H4.66675ZM11.3334 4H4.66675V12.6667H11.3334V4ZM6.00008 11.3333H7.33341V5.33333H6.00008V11.3333ZM8.66675 11.3333H10.0001V5.33333H8.66675V11.3333Z" fill="currentcolor" />
            </svg>

          </div>
          Delete
        </button>

      </div>
    </div>
  )
}
