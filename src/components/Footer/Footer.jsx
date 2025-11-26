"use client";

import Link from "next/link";

import { LuRotate3D } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-pink-500 to-red-600 py-12 px-6 rounded-xl mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo + Navigation */}
        <div>
          <Link href={'/'} className="flex items-center space-x-2 text-white">
            <LuRotate3D size={25} />
            <span className="text-xl font-bold text-white">BookCrafters</span>
          </Link>
          <ul className="space-y-2 mt-4">
            <li>
              <Link href="/allBooks" className="text-white hover:text-blue-200">
                All Books
              </Link>
            </li>
            <li>
              <Link href="/addBooks" className="text-white hover:text-blue-200">
                Add Book
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-white hover:text-blue-200">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-white hover:text-blue-200">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="text-white hover:text-blue-200">
                Learning Blog
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-white hover:text-blue-200">
                Guides
              </Link>
            </li>
            <li>
              <Link href="/tips" className="text-white hover:text-blue-200">
                Book Tips
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-white hover:text-blue-200">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Community</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/forum" className="text-white hover:text-blue-200">
                Discussion Forums
              </Link>
            </li>
            <li>
              <Link href="/groups" className="text-white hover:text-blue-200">
                Study Groups
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-white hover:text-blue-200">
                Events & Workshops
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" className="text-white hover:text-blue-200">
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div>
            <a
              href="mailto:support@bookcrafters.com"
              className="flex items-center text-white hover:text-blue-200"
            >
              <CiMail size={18} className="mr-2" /> support@bookcrafters.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white mt-8 pt-4 text-center text-white text-sm">
        © {currentYear} BookCrafters. All Rights Reserved.
        <span className="ml-4">
          <Link href="/" className="hover:text-blue-200 mr-3">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-blue-200">
            Terms of Service
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
