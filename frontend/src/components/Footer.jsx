import React from 'react';
import { FaPhoneAlt, FaClock, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import FooterMap from '../assets/footer_map.png'

const Footer = () => {
  return (
    <footer className="bg-[#1e2431] text-white px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit ametium, consectetur adipiscing elit. Phasellus vehicula sagittis.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-xl" />
            <span>+44 300 303 0266</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-xl" />
            <span>Mon - Sat 8.00 - 18.00</span>
          </div>
        </div>

        {/* Popular Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Popular Courses</h2>
          <ul className="space-y-3">
            <li>
              <p className="text-gray-200">Academic English</p>
              <p className="text-gray-400">Jacke Masito</p>
            </li>
            <li>
              <p className="text-gray-200">PC Systems</p>
              <p className="text-gray-400">Judith Stevens</p>
            </li>
            <li>
              <p className="text-gray-200">Web Technology</p>
              <p className="text-gray-400">Judith Stevens</p>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Support</h2>
          <ul className="space-y-3 text-gray-300">
            <li>Documentation</li>
            <li>Forums</li>
            <li>Available Courses</li>
            <li>Become An Instructor</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Flexible Learning */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Flexible Learning</h2>
          <img
            src={FooterMap}
            alt="World Map"
            className="w-full h-auto"
          />
          
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm gap-4">
        <p>© 2017 Qode Interactive, All Rights Reserved</p>
        <div className="flex items-center gap-4">
          <span>Call +44 300 303 0266</span>
          <span>Follow us</span>
          <FaTwitter />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
