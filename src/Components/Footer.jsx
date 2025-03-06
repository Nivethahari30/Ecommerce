import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {/* Footer Grid */}
      <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-3 gap-10 my-10 mt-40 text-sm">
        {/* Logo & Description */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, laborum?
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-3">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-3">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9080901104</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-5" />

      {/* Copyright Text */}
      <p className="text-center text-gray-500 text-sm">
        © 2025 Forever.com. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
