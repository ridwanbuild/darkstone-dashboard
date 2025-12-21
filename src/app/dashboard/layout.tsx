import { useAuth } from "@/AuthProvider/AuthProvider";
import DashboardNavbar from "./components/DashboardNavbar";
import Sidebar from "./components/SideBar";
import ProtectedRoute from "../ProtectedRoute/protectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
   
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="lg:w-1/5 ">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="lg:w-4/5  w-full flex flex-col">
          <DashboardNavbar />
          <main className="p-6 flex-1  bg-slate-100">{children}</main>
        </div>
      </div>

   
  );
}
