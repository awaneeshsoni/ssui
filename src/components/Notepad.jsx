
import React from "react";

export default function Notepad() {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="bg-blue-800 text-white px-2 py-1 flex justify-between items-center text-xs font-bold">
        <span>Untitled - Notepad</span>
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
      <textarea
        className="flex-1 p-2 resize-none font-mono text-sm bg-white outline-none"
        placeholder="Type here..."
      />
    </div>
  );
}