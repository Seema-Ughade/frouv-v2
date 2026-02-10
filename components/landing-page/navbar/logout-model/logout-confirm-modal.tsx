'use client';

import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LogoutConfirmModal({ isOpen, onClose }: LogoutConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to log out? This will end your session.
        </p>
<div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
  <button
    onClick={onClose}
    className="px-4 py-2 border border-[#9E9E9E] text-[16px] rounded-sm text-[#9E9E9E] hover:bg-gray-50"
  >
    No, Cancel
  </button>

  <LogoutLink className="px-4 py-2 text-center text-[#8BC34A] hover:text-white font-inter rounded-sm font-semibold text-[16px] border border-[#8BC34A] hover:bg-[#689f38]">
    Yes, Logout
  </LogoutLink>
</div>
      </div>
    </div>
  );
}

