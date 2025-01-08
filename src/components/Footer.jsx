/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 6, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:Footer Created successfully.
*/
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import the icons

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 border border-t-1 border-black ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <img src="/logo.svg" alt="Logo" className="" />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#parents-athletes" className="hover:text-gray-400">
                  Parents & Athletes
                </a>
              </li>
              <li>
                <a href="#apply-coach" className="hover:text-gray-400">
                  Apply to Coach
                </a>
              </li>
              <li>
                <a href="#difference" className="hover:text-gray-400">
                  Our Difference
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Login
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-gray-400">
                  Locations
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-gray-400">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy-policy" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#site-terms" className="hover:text-gray-400">
                  Site Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social</h3>
            <div className="flex flex-col gap-1">
              <a href="#facebook" className="text-[#66b932]">
                <FaFacebook className="text-xl text-center" />
              </a>
              <a href="#twitter" className="text-[#66b932]">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#instagram" className="text-[#66b932]">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#linkedin" className="text-[#66b932]">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
