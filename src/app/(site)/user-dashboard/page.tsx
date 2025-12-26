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
  FiActivity,
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
    <div className="min-h-screen bg-white ">
      {/* --- Simple Sticky Navbar --- */}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-gray-50 rounded-full border bg-slate-100 text-gray-700 transition hover:text-gray-900">
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
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-teal-700">Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Real-time overview of your activity.</p>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10">
          {quickCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white border shadow-md border-gray-100 p-5 rounded-2xl flex items-center justify-between group transition-all cursor-pointer hover:border-teal-100"
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

        {/* --- Clean Activity Summary (Updated to 4 Options) --- */}
        <div className="bg-white shadow-md  border border-slate-200 rounded-md p-6 md:p-8">

          <div className="flex items-center gap-2 mb-6">
            <FiActivity className="text-teal-600" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Activity Summary</h2>
          </div>
          
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
            
            <div className="space-y-1">
              <p className="text-2xl font-bold text-slate-800">{requests.length}</p>
              <p className="text-xs font-medium text-slate-500">Pending Requests</p>
              <div className="h-1 w-12 bg-green-500 rounded-full mt-2" />
            </div>
            
            <div className="space-y-1 border-l-0 sm:border-l border-slate-200 sm:pl-8">
              <p className="text-2xl font-bold text-slate-800">{tickets.length}</p>
              <p className="text-xs font-medium text-slate-500">Open Tickets</p>
              <div className="h-1 w-12 bg-blue-500 rounded-full mt-2" />
            </div>

            <div className="space-y-1 border-l-0 md:border-l border-slate-200 md:pl-8">
              <p className="text-2xl font-bold text-slate-800">{notifications.length}</p>
              <p className="text-xs font-medium text-slate-500">Unread Updates</p>
              <div className="h-1 w-12 bg-teal-500 rounded-full mt-2" />
            </div>

            {/* --- New Fourth Summary Option --- */}
            <div className="space-y-1 border-l-0 md:border-l border-slate-200 md:pl-8">
              <p className="text-2xl font-bold text-slate-800">{alerts.length + actions.length}</p>
              <p className="text-xs font-medium text-slate-500">Action Items</p>
              <div className="h-1 w-12 bg-red-400 rounded-full mt-2" />
            </div>

          </div>
        </div>


        {/* --- Footer Status --- */}
        <footer className="mt-5  border-t border-gray-50">

           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-teal-500 rounded-full animate-pulse" />
                <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wider">
                  Operational: System is live
                </p>
              </div>
              <p className="text-[11px] text-gray-300">© 2024 Dashboard Inc.</p>
           </div>


        </footer>

      </div>

    </div>
  );
}