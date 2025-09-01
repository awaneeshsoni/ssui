import React from "react";

export default function Email() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="bg-blue-800 text-white px-2 py-1 flex justify-between items-center text-xs font-bold">
        <span>New Message</span>
        <div className="flex gap-2">
          <button className="bg-gray-200 text-black w-4 h-4 text-xs flex items-center justify-center border border-black">
            _
          </button>
          <button className="bg-gray-200 text-black w-4 h-4 text-xs flex items-center justify-center border border-black">
            □
          </button>
          <button className="bg-gray-200 text-black w-4 h-4 text-xs flex items-center justify-center border border-black">
            ✕
          </button>
        </div>
      </div>

      <div className="flex flex-col p-2 gap-1 text-xs bg-gray-100 flex-1">
        <div className="flex gap-2 items-center">
          <span>To:</span>
          <input className="flex-1 border border-gray-400 p-1 text-xs" />
        </div>
        <div className="flex gap-2 items-center">
          <span>Subject:</span>
          <input className="flex-1 border border-gray-400 p-1 text-xs" />
        </div>
        <textarea
          className="flex-1 border border-gray-400 p-1 resize-none"
          placeholder="Write your email here..."
        />
      </div>

      <div className="p-2 flex justify-end gap-2 bg-gray-200">
        <button className="px-3 py-1 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] bg-gray-100">
          Send
        </button>
        <button className="px-3 py-1 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] bg-gray-100">
          Cancel
        </button>
      </div>
    </div>
  );
}
