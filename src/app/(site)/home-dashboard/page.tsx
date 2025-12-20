"use client";

import React from "react";
import {
  FiBell,
  FiSearch,
  FiMail,
  FiBox,
  FiSmile,
  FiHelpCircle,
  FiPenTool,
  FiUser,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";

/* ---------------- Quick Access Cards ---------------- */
const quickCards = [
  {
    title: "Happy Notes",
    desc: "Appreciation & feedback from team",
    icon: FiSmile,
  },
  {
    title: "Assets",
    desc: "Assigned devices & resources",
    icon: FiBox,
  },
  {
    title: "Email Signatures",
    desc: "Manage your official signature",
    icon: FiMail,
  },
  {
    title: "Support Tickets",
    desc: "View or raise IT tickets",
    icon: FiHelpCircle,
  },
  {
    title: "Tools",
    desc: "Internal company tools",
    icon: FiPenTool,
  },
  {
    title: "Notifications",
    desc: "Latest alerts & updates",
    icon: FiBell,
  },
];

/* ---------------- Employee Status Cards (RE-USED) ---------------- */
const statusCards = [
  {
    title: "My Profile",
    icon: FiUser,
    iconColor: "text-teal-600",
    items: ["Role: Software Engineer", "Status: Active"],
  },
  {
    title: "Work Status",
    icon: FiActivity,
    iconColor: "text-indigo-600",
    items: ["Today: Working from Office", "Shift: 9:00 AM – 6:00 PM"],
  },
  {
    title: "Happiness Index",
    icon: FiCheckCircle,
    iconColor: "text-green-600",
    items: ["Mood: 😊 Happy", "Last feedback: Positive"],
  },
];

export default function DashboardHome() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",

  });


  return (


    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {/* ---------------- Top Navbar ---------------- */}

        <header className="pt-2 lg:pt-5 pb-8">
          <div className="flex bg-white shadow-md border border-gray-200 rounded-full items-center justify-between px-4 py-3 max-w-5xl mx-auto">
            <h1 className="text-xl font-semibold text-gray-800">
              Employee Dashboard
            </h1>

            {/* Search */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-72">
              <FiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search (demo)"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>

            {/* Time & Weather */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="hidden sm:block">{currentTime}</span>
              <div className="flex items-center gap-1">
                <WiDaySunny className="text-xl text-yellow-500" />
                <span>32°C</span>
              </div>
            </div>
          </div>
        </header>


        {/* ---------------- Main Content ---------------- */}
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-10">
          {/* -------- Employee Status Section (RE-USED) -------- */}

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statusCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="bg-white border cursor-pointer border-slate-200 rounded-xl p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`text-2xl ${card.iconColor}`} />
                    <h3 className="font-semibold text-gray-800">
                      {card.title}
                    </h3>
                  </div>

                  {card.items.map((item, i) => (
                    <p
                      key={i}
                      className={`text-sm text-gray-500 ${
                        i === 0 ? "mt-2" : ""
                      }`}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              );
            })}
          </section>

          {/* ---------------- Quick Access ---------------- */}
          <section>
            <h2 className="text-xl font-semibold text-teal-800  mb-4">
              Quick Access
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    className="bg-white cursor-pointer rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-teal-600 text-white">
                        <Icon className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>


        </main>


      </div>
    </div>


  );
}
