'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUserProfile, googleSignIn } = useAuth();

    const router = useRouter();
   
    const handleRegistration = async (data) => {
        try {
            const profileImage = data.photo[0];

            const resUser = await createUser(data.email, data.password);

            const formData = new FormData();
            formData.append("image", profileImage);
            const imageApiUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_HOST_KEY}`;

            const imageRes = await axios.post(imageApiUrl, formData);
            const photoURL = imageRes.data.data.url;

            await updateUserProfile(data.name, photoURL);
             toast.success("🎉 Log in Successfull")
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const res = await googleSignIn();
              console.log(res);
              router.push('/');
              toast.success("🎉 Log in Successfull")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen  px-4'>
             <title> Register | Book Crafters</title>
            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10">
                {/* Heading */}
                <div className='text-center mb-6'>
                    <h1 className="text-4xl font-extrabold text-pink-500 mb-2">Create Your Account</h1>
                    <p className="text-gray-600 text-sm">
                        Join the <span className="font-semibold text-red-500">BookCrafters</span> community
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(handleRegistration)} className="space-y-5">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Enter your full name"
                            className="input w-full rounded-full border border-gray-300 px-5 py-2 focus:outline-none focus:ring-0 focus:border-pink-500 transition"
                        />
                        {errors.name && <p className='text-red-500 text-sm mt-1'>Name is required</p>}
                    </div>

                    {/* Photo */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Photo</label>
                        <input
                            type="file"
                            {...register("photo", { required: true })}
                            className="file-input w-full rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-pink-500 transition"
                        />
                        {errors.photo && <p className='text-red-500 text-sm mt-1'>Photo is required</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="example@email.com"
                            className="input w-full rounded-full border border-gray-300 px-5 py-2 focus:outline-none focus:ring-0 focus:border-pink-500 transition"
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>Email is required</p>}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col relative">
                        <label className="text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                            })}
                            placeholder="Enter a strong password"
                            className="input w-full rounded-full border border-gray-300 px-5 py-2 pr-12 focus:outline-none focus:ring-0 focus:border-pink-500 transition"
                        />
                        <div
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-10 cursor-pointer text-gray-500"
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                        {errors.password && (
                            <p className='text-red-500 text-sm mt-1'>
                                {errors.password.type === "required" ? "Password is required" :
                                    errors.password.type === "minLength" ? "Password must be at least 6 characters" :
                                        "Include uppercase, lowercase, number & special character"}
                            </p>
                        )}
                    </div>

                    {/* Terms */}
                    <label className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                        <input type="checkbox"
                            {...register("terms", { required: true })}
                            className="checkbox checkbox-sm accent-pink-500" />
                        I agree to the <span className="text-pink-500 font-semibold">terms & conditions</span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-sm">You must accept terms & conditions</p>}

                    {/* Submit Button */}
                    <button className="btn w-full rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white font-bold py-3 shadow-lg hover:scale-105 transition transform duration-300">
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="divider text-gray-400 my-6">or</div>

                {/* Google Sign Up */}
                <button
                    onClick={handleGoogleSignIn}
                    className="btn w-full rounded-full btn-outline flex items-center justify-center gap-3 hover:bg-pink-50 transition"
                >
                    <FcGoogle size={20} /> Sign Up with Google
                </button>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link
                             href="/login"
                            className="text-pink-500 font-semibold underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
