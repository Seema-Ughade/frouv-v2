"use client"

interface DeleteConfirmDialogProps {
  onConfirm: () => void
  onCancel: () => void
}

export default function DeleteConfirmDialog({ onConfirm, onCancel }: DeleteConfirmDialogProps) {
  return (
    <div className="fixed inset-0 z-[99] bg-[#0016144D] backdrop-blur-[11.4px] flex items-center justify-center p-4 ">
      <div className="bg-white rounded-lg p-8 max-w-[568px] w-full text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Delete This Address?</h3>
        <p className="text-[#9E9E9E] text-[16px] mb-6">
          Are You Sure You Want To Delete This Address? This Action Can't Be Undone.
        </p>
        <div className="flex gap-32 mx-12">
          <button
            onClick={onCancel}
            className="w-auto border-[1px] border-[#004D40] text-green-500  py-2 px-4 rounded hover:bg-gray-50 transition"
          >
            No, Keep It
          </button>
          <button
            onClick={onConfirm}
            className="w-auto bg-[#D32F2F] text-white py-2 px-8 rounded transition"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  )
}
