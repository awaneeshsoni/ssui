import React, { useState } from "react";
import profileImg from "../assets/profile.jpeg";

export default function SubstackCard() {
  const [quote, setQuote] = useState("write");

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 p-12">
      <div className="w-full h-full rounded-md bg-white shadow-[0_30px_70px_rgba(0,0,0,0.18)] border border-white/80 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-3 py-4 ">
          <div className="flex items-center gap-2">
            <img
              src={profileImg}
              alt="Awaneesh Soni"
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Crect width='48' height='48' rx='24' fill='%23ddd'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' fill='%23777' font-size='20' font-family='sans-serif'%3EA%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <div className="text-base font-medium text-slate-900 my-[-2px]">Awaneesh Soni</div>
              <div className="text-[13px] text-slate-500">insights</div>
            </div>
          </div>
          <svg className="w-6 h-6 text-orange-500" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M1.96484 0.624512H18.0354V2.70052H1.96484V0.624512Z" stroke="none" />
              <path d="M1.96484 4.77655H18.0354V6.85254H1.96484V4.77655Z" stroke="none" />
              <path d="M1.96484 8.92857V19.9505L10.0001 14.6347L18.0354 19.9505V8.92857H1.96484Z" stroke="none" />
            </g>
          </svg>
        </div>

        <div className="flex-1 px-4 flex flex-col min-h-0">
          <div className="flex-1 min-h-0">
            <textarea
              className="h-full min-h-0 w-full bg-transparent text-slate-900 text-[18px] leading-[1.4] font-normal resize-none outline-none placeholder:text-slate-400"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              rows={1}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-[0.05em] font-medium pb-3 pt-2">
            <span>Jan 10, 2025</span>
            <span>substack.com/@awaneeshsoni</span>
          </div>
        </div>
      </div>
    </div>
  );
}
