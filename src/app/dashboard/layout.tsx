"use client";

import { useAuth } from "@/AuthProvider/AuthProvider";
import DashboardNavbar from "./components/DashboardNavbar";
import Sidebar from "./components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="lg:w-1/5 border-r border-gray-300">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="lg:w-4/5 w-full flex flex-col">
        <DashboardNavbar />

        <main className="p-4 flex-1 py-10 bg-slate-100">{children}</main>
      </div>
    </div>
  );
}
