import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children, className = "" }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-3 md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full rounded-2xl bg-white p-4 shadow-2xl md:p-8 ${className}`}
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-brand-dark/40 text-lg leading-none hover:bg-brand-light"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}