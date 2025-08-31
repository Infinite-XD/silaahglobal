import React, { useEffect, useRef, useState } from "react";
import SVG from 'react-inlinesvg';

// Main

export default function App() {
  return (
    NavButton()
  );
}


// Header, Navigation/icon


function NavButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-haspopup="menu"
          aria-expanded={open}
          className={`w-14 h-14 rounded-full
                     bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600
                     ring-1 ring-white/20 shadow-lg shadow-purple-600/30
                     flex items-center justify-center
                     transition-all duration-300 ease-out
                     hover:scale-105 active:scale-95
                     ${open ? "ring-2 ring-violet-300/50" : ""}`}
        >
          <SVG
            src="src/assets/vectorised-image.svg"
            className="w-14 h-14 text-white transition-transform duration-300 ease-out"
          />
        </button>

        {/* Dropdown */}
        <div
          role="menu"
          className={`absolute right-0 mt-5 w-56 origin-top-right
                      rounded-xl border border-white/20
                      bg-white/70 backdrop-blur-md shadow-lg
                      transition-all duration-300 ease-out transform
                      ${open ? "opacity-100 translate-y-2" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          <nav className="py-2">
            {["Home", "About", "Services", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ transitionDelay: `${i * 40}ms` }}
                className={`block px-5 py-3 text-sm font-medium text-zinc-600
                            transition-all duration-300 ease-out
                            hover:text-zinc-900 hover:bg-zinc-100/70
                            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}



// Hero section, 'Silaah Global'


// Content, body {why/goals/steps}


// Image carousel expanding on goals/steps


// Fooooter (about, contact, donations etc)

