import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <button
          onClick={onClose}
          className="mt-4 text-blue-500 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
