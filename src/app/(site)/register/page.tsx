"use client";

import { useAuth } from "@/AuthProvider/AuthProvider";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FiMail, FiLock, FiAlertTriangle } from "react-icons/fi";

export default function RegisterPage() {
  const { register } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });

    try {
      await register(email, password);
      alert("Account created");
    } catch (error: any) {
      alert(error.message);
    }


  };

  return (
    <div className="flex items-center py-35 justify-center  px-4">
      <div className="flex w-full border rounded-xl border-gray-200 shadow-lg bg-white p-8 max-w-96 flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-900">Sign in</h2>

        <p className="mt-3 flex items-center text-center text-sm text-red-600">
          <FiAlertTriangle size={50} className="mr-2 animate-bounce" />
          Please double-check your email and Iqama number. Incorrect information
          may prevent access.
        </p>

        {/* Social Login */}
        <div className="mt-5 flex items-center justify-center">
          <button
            type="button"
            className="flex items-center cursor-pointer shadow-sm p-3 justify-center rounded-full border border-gray-200  hover:bg-gray-50"
          >
            <FaGoogle size={20} />
          </button>
        </div>

        {/* Divider */}
        <div className="my-5 flex w-full items-center gap-4">
          <div className="h-px w-full bg-gray-300/90" />
          <p className="text-sm text-nowrap text-gray-500/90">
            or sign in with email
          </p>
          <div className="h-px w-full bg-gray-300/90" />
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
              placeholder="Iqama Number"
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
              Forgot Iqama number?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 cursor-pointer h-11 w-full rounded-full bg-gray-600 text-white transition disabled:opacity-60"
          >
            Sign in
          </button>

        </form>

        {/* Signup */}
        <p className="mt-4 text-gray-800/90">
          I have account{" "}
          <Link href="/login" className="text-gray-800 font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
