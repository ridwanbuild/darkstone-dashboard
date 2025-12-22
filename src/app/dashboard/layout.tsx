"use client";


import { useAuth } from "@/AuthProvider/AuthProvider";
import DashboardNavbar from "./components/DashboardNavbar";
import Sidebar from "./components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useAuth();


  // ⏳ Show loading while auth/data is resolving
  if (loading) {
    
    return (

     <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
        <h2 className="text-lg font-semibold mb-2">
          Preparing your dashboard
        </h2>
        <p className="text-sm text-gray-600 max-w-sm">
          We are securely loading your account information and dashboard data.
          This will only take a moment.
        </p>
      </div>


    );

  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="lg:w-1/5 border-r border-gray-300">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="lg:w-4/5 w-full flex flex-col">
        <DashboardNavbar />

        <main className="p-6 flex-1 py-10 bg-slate-100">
          {children}
        </main>
      </div>

    </div>
  );
}
