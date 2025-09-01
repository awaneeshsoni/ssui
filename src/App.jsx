// App.jsx
import React, { useState } from "react";
import Notepad from "./components/Notepad";
import Email from "./components/ComposeEmail";
import { toPng } from "html-to-image";
import demoemail from "./assets/demo-email.png";
import demonote from "./assets/demo-notepad.png";

export default function App() {
  const [page, setPage] = useState("home");

  const handleDownload = () => {
    const node = document.getElementById("screenshot-area");
    if (!node) return;
    toPng(node).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="min-h-screen bg-[#008080] flex flex-col items-center justify-center text-sm font-sans">
      {/* Home Page */}
      {page === "home" && (
        <div className="flex text-center flex-col items-center gap-8 px-4 w-full">
          <h1 className="text-3xl text-white font-bold mb-4 text-center">
            Retro Windows UI Custom Screenshots
          </h1>

          {/* Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Email Demo */}
            <div
              onClick={() => setPage("email")}
              className="cursor-pointer bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] p-3 hover:scale-[1.02] transition flex flex-col items-center"
            >
              <div className="w-full max-h-[300px] flex items-center justify-center overflow-hidden border border-gray-500 mb-2 bg-white">
                <img
                  src={demoemail}
                  alt="Windows 98 Email Demo"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <button className="px-4 py-1 bg-gray-300 border border-gray-600 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#000]">
                ✉️ Open Email
              </button>
            </div>

            {/* Notepad Demo */}
            <div
              onClick={() => setPage("notepad")}
              className="cursor-pointer bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] p-3 hover:scale-[1.02] transition flex flex-col items-center"
            >
              <div className="w-full max-h-[300px] flex items-center justify-center overflow-hidden border border-gray-500 mb-2 bg-white">
                <img
                  src={demonote}
                  alt="Windows 95 Notepad Demo"
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <button className="px-4 py-1 bg-gray-300 border border-gray-600 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#000]">
                📄 Open Notepad
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Editor Pages */}
      {page !== "home" && (
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <div
            id="screenshot-area"
            className="bg-gray-300 border-2 border-gray-600 w-[95%] max-w-3xl"
          >
            {page === "notepad" && <Notepad />}
            {page === "email" && <Email />}
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            <button
              onClick={() => setPage("home")}
              className="px-3 py-1 bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000]"
            >
              ⬅ Back
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1 bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000]"
            >
              💾 Download Screenshot
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
