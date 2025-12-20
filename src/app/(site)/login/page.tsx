"use client";

import { useAuth } from "@/AuthProvider/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // ❌ stop page reload

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });

    try {
      await login(email, password);
      toast.success("Login success")
      router.push("/home-dashboard")

    } catch (error: any) {
      alert(error.message);
    }

  };

  return (
    <div className="flex items-center py-16 justify-center bg-slate-100 px-4">

      <div className="flex w-full border-b-3  rounded-xl border-gray-800 shadow-lg bg-white p-8 max-w-96 flex-col items-center justify-center">

        <h2 className="text-2xl font-bold text-slate-900">Darkstone Group</h2>

        <div className="pb-5">
          <p className=" text-sm text-gray-500/90">Welcome back!</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          {/* Email */}
          <div className="flex h-12 w-full items-center gap-2 rounded-full border border-gray-200 pl-5 focus-within:border-gray-400">
            <FiMail className="text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="h-full w-full bg-transparent text-sm outline-none"
            />
          </div>

          {/* Password */}
          <div className="mt-6 flex h-12 w-full items-center gap-2 rounded-full border border-gray-200 pl-5 focus-within:border-gray-400">
            <FiLock className="text-gray-400" />
            <input
              type="password"
              name="password"
              className="h-full w-full bg-transparent text-sm outline-none"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="mt-8 flex w-full items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input type="checkbox" className="accent-gray-800" />
              Remember me
            </label>
            <a href="#" className="text-gray-800 underline">
              Forgot iqama number?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 cursor-pointer h-11 w-full rounded-full bg-gray-700 text-white transition disabled:opacity-60"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        {/* <p className="mt-4 text-gray-800/90">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-gray-800 font-semibold underline"
          >
            Sign up
          </Link>
        </p> */}


      </div>
    </div>
  );
}
