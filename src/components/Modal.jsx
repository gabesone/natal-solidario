function Modal({ children, open, onClose }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex items-center justify-center ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded bg-slate-50 p-6 shadow transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded px-2 text-2xl text-slate-400 transition-colors duration-300 hover:text-slate-800"
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
