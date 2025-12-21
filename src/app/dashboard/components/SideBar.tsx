"use client";

import React, { useState } from "react";
import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiShield,
  FiActivity,
  FiDollarSign,
  FiEdit3,
  FiBriefcase,
  FiLayers,
  FiClipboard,
  FiCheckSquare,
  FiUser,
} from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const menuItems = [
  
  // 🔹 COMMON
  { name: "Dashboard", href: "/dashboard", icon: FiHome },

  // 🔴 ADMIN
  { name: "Admin Overview", href: "/dashboard/admin", icon: FiShield },
  { name: "Users", href: "/dashboard/admin/users", icon: FiUsers },
  { name: "System Logs", href: "/dashboard/admin/system-logs", icon: FiActivity },
  { name: "Analytics", href: "/dashboard/admin/analytics", icon: FiBarChart2 },
  { name: "Payroll", href: "/dashboard/admin/payroll", icon: FiDollarSign },
  { name: "Admin Settings", href: "/dashboard/admin/settings", icon: FiSettings },

  // 🟡 EDITOR
  // { name: "Editor Overview", href: "/dashboard/editor", icon: FiEdit3 },
  // { name: "Projects", href: "/dashboard/editor/projects", icon: FiBriefcase },
  // { name: "Tasks", href: "/dashboard/editor/tasks", icon: FiLayers },
  // { name: "Content Approval", href: "/dashboard/editor/content", icon: FiClipboard },
  // { name: "Team Performance", href: "/dashboard/editor/performance", icon: FiBarChart2 },

  // 🟢 EMPLOYEE
  // { name: "Employee Overview", href: "/dashboard/employee", icon: FiHome },
  // { name: "My Tasks", href: "/dashboard/employee/my-tasks", icon: FiCheckSquare },
  // { name: "Attendance", href: "/dashboard/employee/attendance", icon: FiClipboard },
  // { name: "Payslips", href: "/dashboard/employee/payslips", icon: FiDollarSign },
  // { name: "Profile", href: "/dashboard/employee/profile", icon: FiUser },
  
];


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* Mobile Toggle Button */}

      <div className=" w-full py-10">
        <button
          onClick={() => setOpen(true)}
          className="md:hidden fixed top-4 cursor-pointer border p-1 rounded-sm border-gray-400 left-4 z-50 text-2xl text-gray-700"
        >
          <FiMenu />
        </button>
      </div>

      {/* Overlay (Mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-gray-300 border-b">
          
          <Link href={'/'} className="text-xl font-bold text-teal-800">Dashboard</Link>

          <button
            className="md:hidden text-xl text-gray-700 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <FaArrowLeft />
          </button>
        </div>

        {/* Menu */}
        <nav className="px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (

              <Link href={`${item.href}`}
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="text-xl" />
                <span className="font-medium">{item.name}</span>

              </Link>

            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full px-4 py-4 border-t border-gray-300">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50">
            <FiLogOut className="text-xl" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
