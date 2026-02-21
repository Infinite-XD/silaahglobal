// App.jsx
// This the main file that displays all components


import React, { useState, useEffect } from "react";

// icons
import myIcon from './assets/icons/silaahfullicon.svg';
import myDarkIcon from './assets/icons/darkfinal.svg';
import miniIcon from './assets/icons/myIcon.svg';
import miniDark from './assets/icons/minidark2.svg';


// hero section imagess
import image1 from './assets/image1.png';
import image2 from './assets/image2.JPG';
import image3 from './assets/image3.JPG';
import image4 from './assets/image4.webp';


// about section images ('more than a...') smth with education?
import about_image1 from './assets/about_images/1.webp';
import about_image2 from './assets/about_images/2.png';
import about_image3 from './assets/about_images/3.jpg';
import about_image4 from './assets/about_images/4.jpg';
import about_image5 from './assets/about_images/5.PNG';

// import image2 from './assets/image2.png';
// import image3 from './assets/image3.png';
// import image4 from './assets/image4.png';
// import image5 from './assets/image5.png';
// import image6 from './assets/image6.JPG'; // donation image


const images = [image1, image2, image3, image4]
const about_images = [about_image1, about_image2, about_image3, about_image4, about_image5,]


const UserIconDark = ({ size = 112, id = "x", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 128 128"
    role="img"
    aria-label="User profile icon"
    className={className}
  >
    <defs>
      {/* Darker, cohesive purple theme */}
      <linearGradient id={`ring-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#170840" />  {/* violet-600 */}
        <stop offset="100%" stopColor="#111724" /> {/* indigo-700 */}
      </linearGradient>

      <linearGradient id={`avatar-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#170840" />  {/* violet-400 */}
        <stop offset="100%" stopColor="#111724" /> {/* violet-700 */}
      </linearGradient>

      <clipPath id={`avatarClip-${id}`}>
        <circle cx="64" cy="64" r="46" />
      </clipPath>
    </defs>

    {/* Inner background (darker + purple-tinted) */}
    <circle cx="64" cy="64" r="50" fill="#828ff5" />

    {/* Icon-style silhouette */}
    <g clipPath={`url(#avatarClip-${id})`}>
      {/* Head */}
      <circle cx="64" cy="55" r="16" fill={`url(#avatar-${id})`} />

      {/* Shoulders / torso: filled shape (more "icon-like" than a stroke line) */}
      <path
        d="M34 112c2-18 16-30 30-30h0c14 0 28 12 30 30"
        fill={`url(#avatar-${id})`}
        opacity="0.95"
      />

    </g>
  </svg>
);

const UserIconLight = ({ size = 112, id = "x", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 128 128"
    role="img"
    aria-label="User profile icon"
    className={className}
  >
    <defs>
      {/* Darker, cohesive purple theme */}
      <linearGradient id={`ring-${id}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#170840" /> 
        <stop offset="100%" stopColor="#111724" /> 
      </linearGradient>

      <linearGradient id={`avatar-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#170840" />
        <stop offset="100%" stopColor="#111724" />
      </linearGradient>

      <clipPath id={`avatarClip-${id}`}>
        <circle cx="64" cy="64" r="46" />
      </clipPath>
    </defs>

    {/* Inner background (darker + purple-tinted) */}
    <circle cx="64" cy="64" r="50" fill="#c3adf8" />

    {/* Icon-style silhouette */}
    <g clipPath={`url(#avatarClip-${id})`}>
      {/* Head */}
      <circle cx="64" cy="55" r="16" fill={`url(#avatar-${id})`} />

      {/* Shoulders / torso: filled shape (more "icon-like" than a stroke line) */}
      <path
        d="M34 112c2-18 16-30 30-30h0c14 0 28 12 30 30"
        fill={`url(#avatar-${id})`}
        opacity="0.95"
      />

    </g>
  </svg>
);

function ThemedUserIcon(props) {
  return (
    <>
      <UserIconLight
        {...props}
        className={`${props.className} block dark:hidden`}
      />
      <UserIconDark
        {...props}
        className={`${props.className} hidden dark:block`}
      />
    </>
  );
}


const PROGRAMS = [
  {
    id: 1,
    title: "Educational Support Visits",
    desc:
      "Visiting under-resourced schools to deliver supplies, host reading sessions, and inspire students and teachers.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 6h6M10 10h6M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
{
    id: 2,
    title: "Donation Drives",
    desc:
      "From bake sales to book collections, we turn simple ideas into meaningful contributions.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20 12v10H4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7H2v5h20V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Awareness Campaigns",
    desc:
      "Amplifying conversations on literacy, climate, rights, and equity — one story at a time.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="8" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Community Collaborations",
    desc:
      "Partnering with local changemakers to grow stronger and dream bigger together.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];


const TEAM = [
  {
    id: 1,
    name: "Fatima I.",
    role: "Founder",
    socials: { instagram: "#", linkedin: "https://www.linkedin.com/in/fatima-irfan-%F0%9F%87%B5%F0%9F%87%B8-390149368/", facebook: "#" },
  },
  {
    id: 2,
    name: "Rania",
    role: "Co-Founder",
    socials: { instagram: "#", linkedin: "https://www.linkedin.com/in/mustafa-khattak-90113435a/", facebook: "#" },
  },
  {
    id: 3,
    name: "Mustafa K.",
    role: "Lead Developer",
    socials: { instagram: "#", linkedin: "https://www.linkedin.com/in/mustafa-khattak-90113435a/", facebook: "#" },
  }
];

/* =======================
   Hook: useDarkMode
   - toggles 'dark' class on document.documentElement
   - respects user's system preference on first load
   ======================= */
function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("ngo_dark_mode");
      if (saved !== null) return saved === "true";
      // fallback to prefers-color-scheme
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("ngo_dark_mode", isDark ? "true" : "false");
    } catch {}
  }, [isDark]);

  // smooth-scroll behaviour
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return [isDark, setIsDark];
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // optional, for smooth scrolling
  });
}


/* =======================
   Component: IconButton (small, accessible)
   ======================= */
const IconButton = ({ onClick, label, children }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 dark:focus:ring-indigo-300"
  >
    {children}
  </button>
);

/* =======================
   ===== Header / Navbar =====
   ======================= */
function Header({ isDark, toggleDark }) {
  const [open, setOpen] = useState(false);

  // choose bg classes based on isDark (light: gradient, dark: semi-transparent gray)
  const headerBg = isDark
    ? "bg-gray-900/60 border-b border-transparent dark:border-gray-800"
    : "bg-purple-300 border-b-[0.2px]";

  return (
    <header className={`sticky top-0 z-50 ${headerBg} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); // prevent default anchor jump
              scrollTop(); 
            }}
            className="flex items-center gap-3">
              <img 
              src={isDark ? myDarkIcon : myIcon}
              alt="My Icon" width={80} height={50}/>
            </a>
          </div>

          {/* Nav + actions */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
          <a
            href="#"
            onClick={(e) => { 
              e.preventDefault(); // prevent default anchor jump
              scrollTop(); 
            }}
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Home
          </a>
            <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">About</a>
            <a href="#programs" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Programs</a>
            <a href="#team" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Team</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Dark/Light toggle */}
            <IconButton
              onClick={() => toggleDark(prev => !prev)}
              label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                // Sun icon
                <svg className="w-6 h-6 text-yellow-300" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                // Moon icon
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-100" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </IconButton>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <IconButton onClick={() => setOpen(o => !o)} label="Toggle menu">
                <svg className="w-6 h-6 text-gray-800 dark:text-gray-100" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-2">
            <a href="#" 
            onClick={(e) => { 
              setOpen(false)
              e.preventDefault(); // prevent default anchor jump
              scrollTop(); 
            }}
            className="block text-gray-700 dark:text-gray-200">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="block text-gray-700 dark:text-gray-200">About</a>
            <a href="#programs" onClick={() => setOpen(false)} className="block text-gray-700 dark:text-gray-200">Programs</a>
            <a href="#team" onClick={() => setOpen(false)} className="block text-gray-700 dark:text-gray-200">Team</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-gray-700 dark:text-gray-200">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* =======================
   ===== Hero Section =====
   ======================= */
function Hero({isDark}) {


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // change image every 10s

    return () => clearInterval(interval);
  }, []);


  const Bg = isDark
    ? "bg-gradient-to-b from-gray-900/50 via-violet-950 to-gray-900/50 border-b border-gray-800"
    : "bg-gradient-to-b from-purple-300 via-indigo-400 to-purple-300";

  return (
    <section id="home" className={`relative overflow-hidden ${Bg}`}>
      {/* Background gradient and subtle shapes */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 "
          aria-hidden
        />
        <svg className="absolute -top-10 -left-10 opacity-20 w-96 h-96" viewBox="0 0 400 400" fill="none" aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="1" stopColor="#000000" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="150" fill="url(#g1)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-10 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
              Empowering Change, One Act of Kindness at a Time.
            </h1>
            <p className="mt-6 max-w-xl text-lg sm:text-xl opacity-90">
              At Silaah Global, we’re a student-led movement turning empathy into action — making education accessible and kindness unstoppable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-medium shadow-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:scale-[1.01] transform transition"
              >
                Get Involved
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-medium ring-1 ring-white/30 bg-white/10 hover:bg-white/20 transition"
              >
                Our Programs
              </a>
            </div>

            {/* <div className="mt-8 flex items-center gap-6">
              <div className="text-sm">
                <p className="text-white/90 font-semibold">Impact last year</p>
                <p className="text-2xl font-bold">8,500+ people reached</p>
              </div>
              <div className="text-sm border-l border-white/20 pl-6">
                <p className="text-white/90 font-semibold">Projects</p>
                <p className="text-2xl font-bold">120+ active</p>
              </div>
            </div> */}
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="rounded-xl shadow-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/6 bg-white/60 dark:bg-gray-800/60">
              <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`slide-${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
            <button
              onClick={() =>
                setCurrentIndex((currentIndex - 1 + images.length) % images.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2
                        flex h-11 w-11 items-center justify-center
                        rounded-full bg-black/20 text-white
                        hover:bg-black/70 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % images.length)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2
                        flex h-11 w-11 items-center justify-center
                        rounded-full bg-black/20 text-white
                        hover:bg-black/70 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>


              </div>
              <div className="p-4 bg-gradient-to-bl from-purple-300 to-indigo-400 dark:from-purple-700/20 dark:to-indigo-700/20 text-purple-700 dark:text-whitep-4 ">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">Smiles that begin with opportunity.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

/* =======================
   ===== About Section =====
   ======================= */
function About({isDark}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // change image every 10s

    return () => clearInterval(interval);
  }, []);

  const aboutBg = isDark
    ? "bg-gray-900/60 border-b border-transparent dark:border-gray-800"
    : "bg-gradient-to-br from-purple-300 to-indigo-400";

  return (
    <section id="about" className={`sm:py-10 py-10 lg:py-20 ${aboutBg}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-xl shadow-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/6 bg-white/60 dark:bg-gray-800/60">
              <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                {about_images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`slide-${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
            <button
              onClick={() =>
                setCurrentIndex((currentIndex - 1 + about_images.length) % about_images.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2
                        flex h-11 w-11 items-center justify-center
                        rounded-full bg-black/20 text-white
                        hover:bg-black/70 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % about_images.length)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2
                        flex h-11 w-11 items-center justify-center
                        rounded-full bg-black/20 text-white
                        hover:bg-black/70 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>


              </div>
              <div className="p-4 bg-gradient-to-bl from-purple-300 to-indigo-400 dark:from-purple-700/20 dark:to-indigo-700/20 text-purple-700 dark:text-whitep-4 ">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">Education — a right, not a privilege.
                </h3>
              </div>
            </div>
          </div>
          {/* <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
            <img
              // src="https://images.unsplash.com/photo-1521790369604-0f6db7f3f5b9?w=1200&q=60&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              src={placeholder}
              alt="About our mission"
              className="w-full h-80 object-cover"
            />
          </div> */}

          {/* Text */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">More Than a Project — A Purpose.</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Silaah was born from the belief that change doesn’t need permission — it needs compassion. 
              What began as a small student initiative is taking its first steps toward raising awareness, taking action, and amplifying voices for education and equality.
              We’re young, but we’re not waiting for the future — <span className="font-bold">we’re creating it.</span>
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg ${aboutBg}`}>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Our Mission</h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">To spark change through compassion, awareness, and shared knowledge.</p>
              </div>
              <div className={`p-4 rounded-lg ${aboutBg}`}>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Our Vision</h3>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">A world where every child learns freely, every voice counts, and all realize their power to help.</p>
              </div>
            </div>

            <div className="mt-6">
              <a href="#programs" className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow hover:opacity-95 transition">
                Programs
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =======================
   ===== Programs Section =====
   ======================= */
function Programs({isDark}) {
    const Bg = isDark
    ? "bg-gray-900/60 border-b border-transparent dark:border-gray-800"
    : "bg-gradient-to-tr from-purple-300 to-indigo-400";

  return (
    <section id="programs" className={`sm:py-10 py-10 lg:py-20 ${Bg}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Awareness. Action. Impact.</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our work lives in the space between empathy and action. Every initiative we take — from donation drives to digital advocacy — reflects our belief that real change begins when awareness turns into collective compassion.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map(p => (
            <article key={p.id} className={`p-6 rounded-xl ${Bg}`}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-bl from-purple-200 to-indigo-400 dark:from-purple-700/20 dark:to-indigo-700/20 text-purple-700 dark:text-white">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:underline">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =======================
   ===== Team Section =====
   ======================= */
function Team({isDark}) {
    const Bg = isDark
    ? "bg-gray-900/60 border-b border-transparent dark:border-gray-800"
    : "bg-gradient-to-br from-purple-300 to-indigo-400";
  return (
    <section id="team" className={`sm:py-10 py-10 lg:py-20 ${Bg}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A small, dedicated team — always doing their best.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map(member => (
            <div key={member.id} className={`${Bg} rounded-xl p-6 text-center ring-1 ring-black/5`}>
              {isDark ? <UserIconDark  id={member.id} size={112} className="w-28 h-28 rounded-full mx-auto shadow-md"/> : <UserIconLight id={member.id} size={112} className="w-28 h-28 rounded-full mx-auto shadow-md" />}
              {/* <img src={member.photo} alt={member.name} className="w-28 h-28 object-cover rounded-full mx-auto shadow-md" /> */}
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                {/* Social icons (placeholders) */}
                <a href={member.socials.instagram} target='blank' aria-label={`${member.name} on Instagram`} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg className="w-4 h-4 text-gray-600 dark:text-gray-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
                </a>
                <a href={member.socials.linkedin} target='blank' aria-label={`${member.name} on LinkedIn`} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-14h4v2" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href={member.socials.facebook} target='blank' aria-label={`${member.name} on Facebook`} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =======================
   ===== Contact Section =====
   ======================= */
function Contact({isDark}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const Bg = isDark
  ? "bg-gray-900/60 border-b border-transparent dark:border-gray-800"
  : "bg-gradient-to-tr from-purple-300 to-indigo-400";


  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simulate sending message.
    setStatus({ type: "sending", msg: "Sending..." });
    setTimeout(() => {
      setStatus({ type: "success", msg: "Our contact form is currently closed, but we’d love to connect on LinkedIn or Instagram." });
      setForm({ name: "", email: "", message: "" });
    }, 900);
  }

  return (
    <section id="contact" className={`py-20 ${Bg}`}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Questions? Partnership ideas? Drop us a message and we'll get back to you.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 dark:bg-gray-900 p-6 rounded-xl shadow ring-1 ring-black/5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-indigo-500/10 dark:bg-gray-800 text-gray-700 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-purple-500/40 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-indigo-500/10 dark:bg-gray-800 text-gray-700 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-purple-500/40 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="you@example.org"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 dark:border-gray-700 bg-indigo-500/10 dark:bg-gray-800 text-gray-700 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-purple-500/40 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Tell us about your idea or question..."
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow hover:translate-y-[-1px] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            >
              Send Message
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {status ? (
                <span className={status.type === "success" ? "text-red-600 dark:text-red-400" : ""}>
                  {status.msg}
                </span>
              ) : (
                <span>We reply within 3–5 business days.</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

/* =======================
   ===== Footer =====
   ======================= */
function Footer({isDark}) {

  const Bg = isDark
    ? "bg-gray-900/60 border-b border-transparent dark:border-gray-800"
    : "bg-gradient-to-br from-purple-300 to-indigo-400 border-t-[0.1px]";


  return (
    <footer className={`${Bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
          <div className="flex items-center space-x-3">
            <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); // prevent default anchor jump
              scrollTop(); 
            }}
            className="flex items-center gap-3">
              <img 
              src={isDark ? miniDark : miniIcon}
              alt="My Icon" width={65} height={65}/>
            </a>
          </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Silaah Global</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Creating opportunities, together.</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/silaah_global/" target='blank' aria-label="Instagram" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/silaahglobal/" target='blank' aria-label="LinkedIn" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-14h4v2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Silaah Global. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =======================
   ===== App (root) =====
   ======================= */
export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 antialiased">
      {/* Header */}
      <Header isDark={isDark} toggleDark={setIsDark} />

      {/* Main content */}
      <main>
        <Hero isDark={isDark}/>
        <About isDark={isDark}/>
        <Programs isDark={isDark}/>
        <Team isDark={isDark}/>
        <Contact isDark={isDark}/>
      </main>

      {/* Footer */}
      <Footer isDark={isDark}/>
    </div>
  );
}
