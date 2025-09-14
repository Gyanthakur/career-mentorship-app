
"use client";
import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <>
    <hr className="opacity-[0.2]" />
    <footer className=" bg-gradient-to-br from-white via-blue-100 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-gray-100 py-10 px-6 md:px-20 shadow-md">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-black  dark:text-gray-200">Career Mentorship</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Empowering students & professionals through personalized career
            mentorship. Your growth, our mission.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-gray-200 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-gray-200 mb-3">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Phone size={18} /> +91 89578 18597
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-700 dark:text-gray-300">
            <Mail size={18} /> gps.96169@gmail.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-700 dark:text-gray-300">
            <MessageSquare size={18} /> Career Mentorship Support
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-gray-200 mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Subscribe to our newsletter for updates & tips.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md border border-gray-300 dark:border-gray-900 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-200 text-sm">
          © {new Date().getFullYear()} MentorMate. All rights reserved.
        </p>
        <div className="flex gap-4 text-gray-700 dark:text-gray-200">
          <a href="https://github.com/Gyanthakur" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-600" />
          </a>
          <a href="https://instagram.com/gp.singh.ro.ckstar4438" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-blue-600" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100026766931684" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-blue-600" />
          </a>
          <a href="https://twitter.com/gps_96169" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
