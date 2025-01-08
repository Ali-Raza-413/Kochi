/*
  ---------------------------------------
  Project: Kochi Website
  Date: Jan 8, 2025
  Developer: Ali raza
  ---------------------------------------
  Description:our Login Modals Created successfully.
*/
import React from "react";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <div className="text-center">
          <img src="/logo.svg" alt="Logo" className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-6">Log In</h2>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#66b932] text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password? Reset Here
          </a>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
