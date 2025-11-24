"use client";

import Link from "next/link";
import { use } from "react";
import { AuthContext } from "@/contexts/AuthContext/AuthContext";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaCartPlus, FaDownload, FaGear, FaUser, FaUsers } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";


const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handelLogOut = () => {
    signOutUser()
      .then(result => {
        console.log(result);
        alert("Sign out successful");
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="navbar py-2 min-h-0 z-1 shadow-sm rounded-full glass-card">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/" className="flex items-center gap-1">
                <GoHomeFill /> Home
              </Link>
            </li>
            <li>
              <Link href="/allBooks" className="flex items-center gap-1">
                <MdMenuBook /> All Books
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" className="flex items-center gap-1">
                 <FaUsers size={18} /> About Us
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className="flex items-center gap-1">
                <BiSolidContact size={18} /> Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-1 md:text-3xl text-2xl font-bold text-pink-600">
          <LuRotate3D size={30}/>  Book <span className="md:text-xl text-lg text-black mt-2">Crafters</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <Link href="/" className="flex items-center gap-1 font-semibold">
              <GoHomeFill size={18} /> Home
            </Link>
          </li>
          <li>
            <Link  href="/allBooks" className="flex items-center gap-1 font-semibold">
              <MdMenuBook size={18} /> All Books
            </Link>
          </li>
          <li>
            <Link href="/aboutUs" className="flex items-center gap-1 font-semibold">
              <FaUsers size={18} /> About Us
            </Link>
          </li>
          <li>
            <Link href="/contactUs" className="flex items-center gap-1 font-semibold">
              <BiSolidContact size={18} /> Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            {/* Avatar Button */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 border-2 border-gray-300 hover:border-pink-600 rounded-full">
                <img alt="User Avatar" referrerPolicy="no-referrer" src={user.photoURL || ""} />
              </div>
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className="pb-3 border-b border-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>

              <li className="mt-3">
                <Link href="/profile" className="flex items-center gap-1 font-semibold">
                  <FaUser /> Profile
                </Link>
              </li>
              <li>
                <Link href="/myModels" className="flex items-center gap-1 font-semibold">
                  <FaCartPlus /> My Models
                </Link>
              </li>
              <li>
                <Link href="/myDownloads" className="flex items-center gap-1 font-semibold">
                  <FaDownload /> My Downloads
                </Link>
              </li>
              <li>
                <a className="flex items-center gap-1">
                  <FaGear /> Settings
                </a>
              </li>

              <li>
                <button
                  onClick={handelLogOut}
                  className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn rounded-full border-gray-300 btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white flex items-center gap-1"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
