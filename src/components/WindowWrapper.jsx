import React from "react";

function WindowWrapper({ title, children, onClose }) {
  return (
    <div className="max-w-2xl w-full border-2 border-gray-700 shadow-lg bg-gray-100">
      {/* Title Bar */}
      <div className="bg-blue-800 text-white flex justify-between items-center px-2 py-1">
        <span className="font-bold text-sm">{title}</span>
        <button
          onClick={onClose}
          className="bg-red-600 text-white w-6 h-6 text-center leading-6 font-bold"
        >
          X
        </button>
      </div>
      {/* Content */}
      <div className="p-3">{children}</div>
    </div>
  );
}

export default WindowWrapper;
