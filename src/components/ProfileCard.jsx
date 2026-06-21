import React, { useState } from "react";
import profileImg from "../assets/profile.jpeg";

export default function TwitterPost() {
  const [text, setText] = useState("");
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const dateStr = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="w-full h-full bg-black flex flex-col p-4 gap-3">
      <div className="flex items-start gap-3">
        <img
          src={profileImg}
          alt="Awaneesh Soni"
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Crect width='44' height='44' rx='22' fill='%23333'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-size='20' font-family='sans-serif'%3EA%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-white font-bold text-[15px] leading-5">Awaneesh Soni</span>
            <svg width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0">
              <circle cx="12" cy="12" r="12" fill="#1d9bf0" />
              <path d="M9.5 16.5l-3.5-3.5 1.4-1.4 2.1 2.1 5.6-5.6 1.4 1.4z" fill="white" />
            </svg>
          </div>
          <span className="text-[#71767b] text-[15px] leading-5">@_awaneeshsoni</span>
        </div>
      </div>

      {/* Editable tweet text — grows to fill remaining space */}
      <textarea
        className="flex-1 w-full bg-transparent text-white text-[17px] leading-6 resize-none outline-none placeholder-[#71767b]"
        placeholder="What is happening?!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-[#71767b] text-[15px]">
        {timeStr} · {dateStr}
      </div>

      {/* Divider */}
      <div className="border-t border-[#2f3336]" />

      {/* X watermark */}
      <div className="flex justify-end">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#71767b">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
    </div>
  );
}