"use client";

import { useAuth } from "@/AuthProvider/AuthProvider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiMail, FiLock } from "react-icons/fi";

export default function LoginPage() {
  // get login function & loading state from AuthContext
  const { login, loading } = useAuth();
  const router = useRouter();

  // demo auth 


  // handle form submit
  const handleSubmit = async (e: any) => {
    e.preventDefault(); // stop page reload

    // get form values
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // call login function
      await login(email, password);

        // (temporary logic – will be replaced later)
      const isAdmin = email === "admin@gmail.com";

      // success toast
      toast.success("Login success", {
        position: "top-center",
      });


      if (isAdmin) {
        return router.push("/dashboard")
      } else {
        return router.push("user-dashboard")
      }


    } catch (error) {
      // error toast
      toast.error("Email or iqama is incorrect", {
        position: "top-center",
      });

    }
  };


  const handlerIqamaNumber = () => {
    return toast.success(
      "Please check your email. We have sent you the instructions"
    );
  };






  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] px-4">
      {/* Login Card */}
      <div className="flex w-full max-w-96 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-900">Darkstone Group</h2>

        {/* Subtitle */}
        <p className="pb-5 text-center w-72 pt-2 text-sm text-gray-500/90">
          Please make sure your email and iqama number are correct
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Email input */}
          <div className="flex h-12 items-center gap-2 rounded-full autofill:bg-transparent bg-transparent  border border-gray-200 pl-5 focus-within:border-gray-400">
            <FiMail className="text-gray-400" />
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email address"
              required
              className="h-full w-full bg-transparent autofill:bg-transparent text-sm outline-none"
            />
          </div>

          {/* Password input */}
          <div className="mt-6 flex h-12 items-center gap-2 rounded-full border border-gray-200 pl-5 focus-within:border-gray-400">
            <FiLock className="text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="h-full w-full bg-transparent text-sm outline-none"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="mt-8 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input type="checkbox" className="accent-gray-800" />
              Remember me
            </label>

            <span
              onClick={handlerIqamaNumber}
              className="text-gray-800 underline cursor-pointer"
            >
              Forgot iqama number?
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 h-11 w-full cursor-pointer rounded-full bg-gray-700 text-white transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Login
          </button>



        </form>
      </div>


    </div>
  );
}
