"use client";

import { useAuth } from "@/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation"; // ✅ fixed




export default function HeroSection() {
   const { user } = useAuth(); // ✅ OK because this is a client component
   const router = useRouter(); // ✅ App Router version


  const handlerDashboard = () => {
    if (!user) {
      router.push("/login"); // redirect if not logged in
    } else {
      router.push("/dashboard"); // redirect if logged in
    }
  };



  return (
    <section className="bg-gradient-to-b px-3 sm:px-10 from-[#F5F7FF] via-[#fffbee] to-[#d5e8f8] pt-6 h-full">

      <main className="flex items-center justify-center py-30 lg:h-screen flex-col w-full">

      <div className=" flex me-5 items-center mb-10 bg-white/70 shadow-md backdrop-blur-[2px] px-4 gap-2 py-1 rounded-full">
          <span className="p-1 w-3 h-3 animate-pulse bg-red-500 rounded-full"> </span>
          <p className="text-center">Currently in development</p>
        </div>
        

        <h1 className="text-center text-slate-800 font-semibold text-xl lg:w-[700] w-[250] lg:text-5xl leading-tight">
          Darkstone Group{" "}
          <span className="bg-gradient-to-r from-pink-600 to-indigo-500 bg-clip-text text-transparent">
            delivers end-to-end
          </span>{" "}
          solutions.
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base">
          Darkstone specializes in mining services. We also offer geological
          services. Our services are available across Saudi Arabia
        </p>

        {/* ✅ Button instead of Link */}
        <button
          onClick={handlerDashboard}
          className="mt-8 bg-gradient-to-r from-slate-600 to-gray-800 cursor-pointer text-white px-6 py-2.5 rounded-full text-sm font-medium transition"
        >
          Your Dashboard →
        </button>

      </main>
    </section>
  );
}
