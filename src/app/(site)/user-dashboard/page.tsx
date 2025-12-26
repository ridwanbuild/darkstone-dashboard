"use client";

import { useActions } from "@/Hook/useActions";
import { useAlerts } from "@/Hook/useAlerts";
import { useHappyNotes } from "@/Hook/useHappyNotes";
import { useNotifications } from "@/Hook/useNotifications";
import { useRequests } from "@/Hook/useRequests";
import { useSupport } from "@/Hook/useSupport";
import Link from "next/link";
import React from "react";
import {
  FiBell,
  FiMail,
  FiSmile,
  FiHelpCircle,
  FiPenTool,
  FiAlertTriangle,
  FiArrowLeft,
  FiChevronRight,
  FiUser,
} from "react-icons/fi";

export default function UserDashboard() {
  const { data: actions = [] as any[] } = useActions();
  const { alerts = [] as any[] } = useAlerts();
  const { notes = [] as any[] } = useHappyNotes();
  const { notifications = [] as any[] } = useNotifications();
  const { requests = [] as any[] } = useRequests();
  const { tickets = [] as any[] } = useSupport();

  const quickCards = [
    { title: "Happy Notes", count: notes.length, msg: "Great job!", icon: FiSmile, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Actions", count: actions.length, msg: "Stay proactive.", icon: FiMail, color: "text-indigo-500", bg: "bg-indigo-50" },
    { title: "Support", count: tickets.length, msg: "Need help?", icon: FiHelpCircle, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Requests", count: requests.length, msg: "Balance is key.", icon: FiPenTool, color: "text-green-500", bg: "bg-green-50" },
    { title: "Notifications", count: notifications.length, msg: "Stay updated.", icon: FiBell, color: "text-teal-500", bg: "bg-teal-50" },
    { title: "Alerts", count: alerts.length, msg: "Keep it safe.", icon: FiAlertTriangle, color: "text-red-500", bg: "bg-red-50" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- Simple Sticky Navbar --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-gray-50 rounded-full transition text-gray-400 hover:text-gray-900">
              <FiArrowLeft size={20} />
            </Link>
            <span className="font-bold text-gray-800 tracking-tight">Portal</span>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900 leading-none">Employee</p>
                <p className="text-[10px] text-gray-400">View Profile</p>
             </div>
             <div className="h-9 w-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">
                <FiUser size={18} />
             </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* --- Welcome --- */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-teal-700">Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Real-time overview of your activity.</p>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {quickCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 p-5 rounded-2xl flex items-center justify-between group hover:border-gray-300 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-11 w-11 rounded-xl ${card.bg} ${card.color} flex items-center justify-center`}>
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{card.title}</h3>
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">{card.msg}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-900">
                    {card.count}
                  </span>
                  <FiChevronRight className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Footer Status --- */}
        <footer className="mt-12 py-6 border-t border-gray-50">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-teal-500 rounded-full animate-pulse" />
                <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">
                  Operational: {notifications.length} Unread notifications
                </p>
              </div>
              <p className="text-[11px] text-gray-300">© 2024 Dashboard Inc.</p>
           </div>
        </footer>


      </div>
    </div>
  );
}