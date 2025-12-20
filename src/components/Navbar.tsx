"use client";

import { useAuth } from "@/AuthProvider/AuthProvider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // ✅ fixed import
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const router = useRouter();

  // ✅ Unified function for login/logout
  const handleAuthClick = () => {
    if (user) {
      logOut();
      toast.success("Logout successful!");
      router.push("/login"); // navigate to login after logout
    } else {
      router.push("/login"); // navigate to login if not logged in
    }
  };



  return (
    <>
      <Toaster position="top-right" />

      {/* NAVBAR */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 md:py-4 max-w-6xl w-[95%] rounded-full bg-white/80 backdrop-blur-xl shadow-sm">
        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-2xl cursor-pointer bg-gradient-to-r from-rose-400 to-blue-600 bg-clip-text text-transparent"
        >
          Darkstone
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition hover:text-indigo-600 ${
                pathname === item.href ? "text-indigo-600 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTION */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/register"
            className="bg-gradient-to-r from-slate-800 to-gray-600 text-white px-5 py-2 rounded-full text-sm font-medium"
          >
            Register
          </Link>

          <button
            onClick={handleAuthClick}
            className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium ${
              user ? "bg-gray-200 text-gray-800 " : "bg-gradient-to-r text-white from-slate-800 to-gray-600"
            }`}
          >
            {user ? "Logout" : "Login"}
          </button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[5.5rem] left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl rounded-2xl bg-white shadow-lg transition-all duration-300 h-screen md:hidden ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col divide-y h-screen bg-white/40 backdrop-blur-[3px] divide-gray-300 text-gray-700 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-6 py-4 hover:bg-gray-50 ${
                pathname === item.href ? "text-indigo-600 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* MOBILE ACTION */}
          <div className="flex gap-3 px-6 py-4">
            <Link
              onClick={() => setOpen(false)}
              href="/register"
              className="flex-1 text-center bg-gradient-to-r from-slate-800 to-gray-600 text-white py-2 rounded-full text-sm"
            >
              Register
            </Link>

            <button
              onClick={() => {
                handleAuthClick();
                setOpen(false);
              }}
              className={`flex-1 cursor-pointer text-center py-2 rounded-full text-sm text-white ${
                user ? "bg-red-600" : "bg-gradient-to-r from-slate-800 to-gray-600"
              }`}
            >
              {user ? "Logout" : "Login"}

            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
