import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

/**
 * Lightweight dialog for full project descriptions.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="surface-panel relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-theme-text-muted transition-colors hover:text-theme-text-primary"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <h2
          id="project-modal-title"
          className="font-display pr-8 text-2xl font-semibold text-theme-text-primary"
        >
          {title}
        </h2>
        <p className="mt-4 leading-relaxed text-theme-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
