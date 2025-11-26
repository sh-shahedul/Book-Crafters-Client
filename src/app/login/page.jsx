"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { signInUser, googleSignIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams?.get("redirect") || "/";
  const watchedEmail = watch("email");

  useEffect(() => {
    setEmail(watchedEmail || "");
  }, [watchedEmail]);

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("🎉 Log in Successfull")
        router.push(redirectTo)
      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
         toast.success("🎉 Log in Successfull")
         router.push(redirectTo)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-10 border border-gray-100">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Welcome Back
          </h1>
           <p className="text-gray-600 text-sm mt-1">
             Sign in to continue your <span className="text-pink-500 font-semibold">BookCrafters</span> journey
           </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
          
          {/* Email */}
          <div>
            <label className="text-gray-700 font-semibold ">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="example@email.com"
              className="w-full rounded-full border border-gray-300 px-5 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-gray-700 font-semibold ">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              })}
              placeholder="Enter your password"
              className="w-full rounded-full border border-gray-300 px-5 py-2 pr-12 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-10 right-5 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

            {errors.password && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.password.type === "required"
                  ? "Password is required"
                  : errors.password.type === "minLength"
                  ? "Password must be at least 6 characters"
                  : "Must contain upper, lower, number & special character"}
              </span>
            )}
          </div>

          {/* Forgot password */}
          <div className="">
            <Link
              href={'/forgotpass'}
              className="text-pink-500 hover:underline text-sm font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button className="w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white py-2 font-bold transition shadow-md">
            Sign In
          </button>
        </form>

        {/* Divider */}
          <div className="divider divider-secondary">Or</div>


        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="w-full rounded-full border border-gray-300 py-2 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
           href={'/registration'}
            className="text-pink-500 font-semibold underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
