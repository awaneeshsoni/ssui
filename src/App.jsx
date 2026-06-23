import React, { useState } from "react";
import Notepad from "./components/Notepad";
import Email from "./components/ComposeEmail";
import TwitterPost from "./components/ProfileCard";
import SubstackCard from "./components/SubstackCard";
import { toPng } from "html-to-image";
import demoemail from "./assets/demo-email.png";
import demonote from "./assets/demo-notepad.png";

export default function App() {
  const [page, setPage] = useState("home");
  const [isResizing, setIsResizing] = useState(false);
  const [containerWidth, setContainerWidth] = useState(500);
  const [containerHeight, setContainerHeight] = useState(375);

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

  const handleResizeStart = (e) => {
    setIsResizing(true);
    e.preventDefault();
    if (e.pointerId && e.currentTarget && e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  React.useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isResizing) return;
      const container = document.getElementById("screenshot-area");
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const newWidth = Math.max(300, e.clientX - rect.left);
      const newHeight = Math.max(225, e.clientY - rect.top);
      
      setContainerWidth(newWidth);
      setContainerHeight(newHeight);
    };

    const handlePointerUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isResizing]);

  const renderResizeControls = () => (
    <div className="flex flex-col gap-4 w-full max-w-3xl px-2">
      <div className="flex flex-col gap-2">
        <label className="flex justify-between text-xs text-white/80">
          <span>Width</span>
          <span>{containerWidth}px</span>
        </label>
        <input
          type="range"
          min="240"
          max="1000"
          value={containerWidth}
          onChange={(e) => setContainerWidth(Number(e.target.value))}
          className="w-full accent-cyan-300"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="flex justify-between text-xs text-white/80">
          <span>Height</span>
          <span>{containerHeight}px</span>
        </label>
        <input
          type="range"
          min="225"
          max="800"
          value={containerHeight}
          onChange={(e) => setContainerHeight(Number(e.target.value))}
          className="w-full accent-cyan-300"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#008080] flex flex-col items-center justify-center text-sm font-sans">

      {page === "home" && (
        <div className="flex text-center flex-col items-center gap-8 px-4 w-full">
          <h1 className="text-3xl text-white font-bold mb-4 text-center">
            Retro Windows UI Custom Screenshots
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

            <div
              onClick={() => setPage("email")}
              className="cursor-pointer bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] p-3 hover:scale-[1.02] transition flex flex-col items-center"
            >
              <div className="w-full max-h-[300px] flex items-center justify-center overflow-hidden border border-gray-500 mb-2 bg-white">
                <img src={demoemail} alt="Windows 98 Email Demo" className="max-h-full w-auto object-contain" />
              </div>
              <button className="px-4 py-1 bg-gray-300 border border-gray-600 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#000]">
                ✉️ Open Email
              </button>
            </div>

            <div
              onClick={() => setPage("notepad")}
              className="cursor-pointer bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] p-3 hover:scale-[1.02] transition flex flex-col items-center"
            >
              <div className="w-full max-h-[300px] flex items-center justify-center overflow-hidden border border-gray-500 mb-2 bg-white">
                <img src={demonote} alt="Windows 95 Notepad Demo" className="max-h-full w-auto object-contain" />
              </div>
              <button className="px-4 py-1 bg-gray-300 border border-gray-600 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#000]">
                📄 Open Notepad
              </button>
            </div>

            <div
              onClick={() => setPage("x.com")}
              className="cursor-pointer bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] p-3 hover:scale-[1.02] transition flex flex-col items-center"
            >
              <div className="w-full max-h-[300px] flex items-center justify-center overflow-hidden border border-gray-500 mb-2 bg-black">
                <svg viewBox="0 0 24 24" width="60" height="60" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <button className="px-4 py-1 bg-gray-300 border border-gray-600 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#000]">
                𝕏 Open X
              </button>
            </div>

            <div
              onClick={() => setPage("substack")}
              className="cursor-pointer bg-gray-200 border border-gray-400 shadow-[inset_-2px_-2px_#fff,inset_2px_2px_#000] p-3 hover:scale-[1.02] transition flex flex-col items-center"
            >
              <div className="w-full max-h-[300px] flex items-center justify-center overflow-hidden border border-gray-500 mb-2 bg-black">
                <span className="text-white text-lg font-semibold">Substack</span>
              </div>
              <button className="px-4 py-1 bg-gray-300 border border-gray-600 shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#000]">
                ✍️ Open Substack
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Notepad / Email pages — Windows chrome + resizable */}
      {page === "email" && (
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <div
            id="screenshot-area"
            className="relative overflow-hidden border-2 border-gray-600 bg-gray-300"
            style={{ 
              width: containerWidth, 
              height: containerHeight,
              minWidth: "240px",
              maxWidth: "100%"
            }}
          >
            <div className="w-full h-full">
              {page === "email" && <Email className="w-full h-full" />}
            </div>
            
            {/* Invisible Resize Handle */}
            <div
              onPointerDown={handleResizeStart}
              className="absolute bottom-0 right-0 w-16 h-16 sm:w-12 sm:h-12 cursor-nwse-resize select-none"
              style={{
                userSelect: 'none',
                touchAction: 'none'
              }}
            />
          </div>

          {renderResizeControls()}

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

      {(page === "notepad") && (
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <div
            id="screenshot-area"
            className="relative overflow-hidden border-2 border-gray-600 bg-gray-300"
            style={{ 
              width: containerWidth, 
              height: containerHeight,
              minWidth: "240px",
              maxWidth: "100%"
            }}
          >
            <div className="w-full h-full">
              {page === "notepad" && <Notepad className="w-full h-full" />}
            </div>
            
            {/* Invisible Resize Handle */}
            <div
              onPointerDown={handleResizeStart}
              className="absolute bottom-0 right-0 w-16 h-16 sm:w-12 sm:h-12 cursor-nwse-resize select-none"
              style={{
                userSelect: 'none',
                touchAction: 'none'
              }}
            />
          </div>

          {renderResizeControls()}

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

      {/* X.com page — clean Twitter screenshot, no Windows chrome */}
      {page === "x.com" && (
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <div
            id="screenshot-area"
            className="relative overflow-hidden border-2 border-gray-600 bg-gray-300"
            style={{ 
              width: containerWidth, 
              height: containerHeight,
              minWidth: "240px",
              maxWidth: "100%"
            }}
          >
            <div className="w-full h-full">
            <TwitterPost />
            </div>
            
            {/* Invisible Resize Handle */}
            <div
              onPointerDown={handleResizeStart}
              className="absolute bottom-0 right-0 w-16 h-16 sm:w-12 sm:h-12 cursor-nwse-resize select-none"
              style={{
                userSelect: 'none',
                touchAction: 'none'
              }}
            />
          </div>

          {renderResizeControls()}

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

      {page === "substack" && (
        <div className="flex flex-col items-center gap-4 w-full px-4">
          <div
            id="screenshot-area"
            className="relative overflow-hidden border-2 border-gray-600 bg-gray-300"
            style={{ 
              width: containerWidth, 
              height: containerHeight,
              minWidth: "240px",
              maxWidth: "100%",
              maxHeight: "calc(100vw * 0.75)",
              minHeight: "225px"
            }}
          >
            <div className="w-full h-full">
              <SubstackCard />
            </div>
            
            {/* Invisible Resize Handle */}
            <div
              onPointerDown={handleResizeStart}
              className="absolute bottom-0 right-0 w-16 h-16 sm:w-12 sm:h-12 cursor-nwse-resize select-none"
              style={{
                userSelect: 'none',
                touchAction: 'none'
              }}
            />
          </div>

          {renderResizeControls()}

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