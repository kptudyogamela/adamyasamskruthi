import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-500 font-semibold transition-colors"
      : "text-gray-600 hover:text-gray-800 transition-colors";

  return (
    <footer className="text-gray-600 body-font overflow-x-hidden border-t border-gray-300">
      <div className="container px-5 py-16 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and Description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <NavLink
            to="/"
            className="flex flex-col items-center md:items-start text-gray-900"
          >
            <img
              src="/images/logo.png"
              alt="Adamya Samskruthi Logo"
              className="w-20 h-14 object-contain mb-2"
            />

            <span className="text-xl font-medium">Adamya Samskruthi</span>
          </NavLink>
          <p className="mt-2 text-sm text-gray-500">
            Fostering cultural values and empowering children through education
            and service.
          </p>
        </div>

        {/* Footer Navigation Sections */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* ABOUT — Hidden on small screens */}
          <div className="hidden md:block lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 pb-1 border-b-2 border-red-500 w-fit mx-auto md:mx-0">
              ABOUT
            </h2>

            <ul className="list-none space-y-2">
              <li>
                <NavLink to="/about" className={linkClass}>
                  Our Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/panchatatva" className={linkClass}>
                  Pancha Tatva
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className={linkClass}>
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={linkClass}>
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 pb-1 border-b-2 border-red-500 w-fit mx-auto md:mx-0">
              LEGAL
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <NavLink to="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-and-conditions" className={linkClass}>
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/disclaimer" className={linkClass}>
                  Disclaimer
                </NavLink>
              </li>
              <li>
                <NavLink to="/grievance-redressal" className={linkClass}>
                  Grievance Redressal
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 mt-8 md:mt-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 pb-1 border-b-2 border-red-500 w-fit mx-auto md:mx-0">
              CONTACT
            </h2>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="mailto:adamyasamskruthi@gmail.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  adamyasamskruthi@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919606089600"
                  className="text-gray-600 hover:text-gray-800"
                >
                  +91 96060 89600
                </a>
              </li>
              <li>
                <p className="text-gray-600">Bengaluru, Karnataka</p>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Follow on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 border-t border-gray-300">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Adamya Samskruthi — All Rights Reserved
          </p>

          <a href="https://swasyaha.in" target="_blank">
            <p className="text-gray-500 text-sm text-center sm:text-left  hover:text-red-600 ">
              Developed & Maintained by —{" "}
              <span className="text-red-300  hover:text-red-600 ml-1cursor-pointer">
                Swasyaha Solutions
              </span>
            </p>
          </a>

          <div className="flex justify-center sm:justify-end space-x-4 mt-2 sm:mt-0">
            <a
              href="https://www.facebook.com/share/1Bpkb9DkKU/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 text-lg"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
