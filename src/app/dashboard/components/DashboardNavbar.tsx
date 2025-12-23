"use client";

import { useAuth } from "@/AuthProvider/AuthProvider";
import Image from "next/image";
import { useState } from "react";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useRouter } from "next/navigation"; // 🔹 for redirect
import Link from "next/link";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  // 🔹 get logout function from AuthProvider
  const { logOut } = useAuth();

  // 🔹 router for navigation
  const router = useRouter();

  // 🔹 handle logout + redirect
  const handleLogout = async () => {
    await logOut(); // logout from Firebase
    router.push("/login"); // go to login page
  };

  const menuItems = [
    { label: "View profile", icon: <FiUser />, danger: false },
    { label: "Account Settings", icon: <FiSettings />, danger: false },
    { label: "Log out", icon: <FiLogOut />, danger: true },
  ];

  return (
    <div className="bg-slate-200 py-3  px-5 flex gap-5 items-center justify-end">
      {/* greeting & notification */}
      <div className="flex gap-2 items-center">
        <h2 className="text-gray-700">Hi Admin!</h2>
        <button className="cursor-pointer">
          <IoMdNotificationsOutline size={24} />
        </button>
      </div>


      {/* profile image */}
      <div className="relative">
        <Image
          src="/profile-image.avif"
          alt="User avatar"
          width={40}
          height={40}
          onClick={() => setOpen(!open)} // open / close dropdown
          className="cursor-pointer rounded-full object-cover"
        />

        {/* dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-68 rounded-xl border border-gray-200 bg-white shadow-lg">
            {/* user info */}
            <div className="flex items-center gap-3 px-4 py-4">
              <Image
                src="/profile-image.avif"
                alt="User avatar"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">John Smith</p>
                <p className="text-sm text-gray-500 truncate max-w-[180px]">
                  johnson@nextadmin.com
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200" />

            {/* menu */}
            <ul className="py-2">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      if (item.label === "Log out") {
                        handleLogout(); // 🔹 logout + redirect
                        setOpen(false); // close dropdown
                      }
                    }}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm
                      ${
                        item.danger
                          ? "text-red-600 hover:bg-red-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.label}
                  </button>

                  {item.label === "Account Settings" && (
                    <div className="my-2 border-t border-gray-300" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link className="bg-slate-300 rounded-full px-4 py-1" href={"/"}>
        {" "}
        Back{" "}
      </Link>
    </div>
  );
}
