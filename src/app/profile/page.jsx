"use client";

import { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { MdVerifiedUser } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";

const MyProfile = () => {
  const { user, setUser } = useAuth();

  const [fullName, setFullName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [address, setAddress] = useState("");
  const [ setProfileCompleteness] = useState(0);

  // Load user data initially
  useEffect(() => {
    if (user) {
      setFullName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
  
    }
  }, [user, address]);

  // Calculate completion percentage
  const calculateProfileCompleteness = (name, photo, addr) => {
    let completeness = 0;
    if (name) completeness += 40;
    if (photo) completeness += 30;
    if (addr) completeness += 30;
    setProfileCompleteness(completeness);
  };

  const handleUpdateProfile = async () => {
    if (!user) return toast.error("No user found!");

    try {
      await updateProfile(user, {
        displayName: fullName,
        photoURL: photoURL,
      });

      setUser({ ...user, displayName: fullName, photoURL });
      toast.success("Profile updated successfully!");

      calculateProfileCompleteness(fullName, photoURL, address);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile.");
    }
  };

  return (
   <PrivateRoute>
     <title>My Profile | Book Crafters </title>
     <div className="min-h-screen flex justify-center items-center mt-5  p-6">
    

      <div className="max-w-5xl w-full bg-white dark:bg-black rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-10">

        {/* ===== Left Side ===== */}
        <div className="flex flex-col items-center md:w-1/3 text-center">
          <div className="relative group">
            <img
              src={photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="User Avatar"
              className="w-36 h-36 rounded-full object-cover border-4 border-pink-600 shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-pink-600 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition">
              <FaCamera className="text-white" />
            </div>
          </div>

          <h2 className="mt-4 text-xl font-bold text-pink-600">{fullName}</h2>
          <p className="text-gray-600">{user?.email}</p>

          <div className="flex items-center justify-center mt-2 bg-linear-to-r from-pink-600  to-red-400 text-white px-4 py-1 rounded-full text-sm font-medium">
            <MdVerifiedUser className="mr-1" /> Verified User
          </div>

        </div>

        {/* ===== Right Side ===== */}
        <div className="md:w-2/3 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Edit Profile</h2>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border rounded-full focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-400"

              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="text"
              value={user?.email || ""}
              readOnly
              className="w-full p-2 border rounded-full focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-400"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full p-2 border rounded-full focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-400"
              placeholder="Paste your photo URL"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-full focus:ring-2 focus:ring-pink-400 focus:border-pink-400 outline-none placeholder-gray-400"
              placeholder="Enter your address"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleUpdateProfile}
            className="mt-4 py-2 w-full bg-linear-to-r from-pink-600  to-red-400 text-white font-semibold rounded-full hover:opacity-90 transition cursor-pointer"
          >
            Update Profile
          </button>
        </div>

      </div>
    </div>
   </PrivateRoute>
  );
};

export default MyProfile;
