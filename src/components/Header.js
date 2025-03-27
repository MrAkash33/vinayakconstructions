"use client"; // Ensure it's a client component

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hi, I am from Vinayak Construction Company.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  // Detect Scroll and Change Header Background
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg" // White with shadow when scrolled
          : "bg-gradient-to-b from-white to-transparent" // Transparent at the top
      }`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-blue-600">
             <Image
              src="/essentials/logo.png"
              alt="logo"
              width={200}
              height={200}
              // objectFit="cover"
              // className="shadow-lg"
            />
          </Link>

          {/* Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-gray-800 hover:text-customBrown text-xl relative ${
                  pathname === item.path ? "font-bold text-customBrown" : ""
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-customBrown rounded-full top-7"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <Link  href={whatsappLink} target="_blank">
              <FaWhatsapp size={24} className="text-gray-600 hover:text-gray-800 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook size={24} className="text-gray-600 hover:text-gray-800 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter size={24} className="text-gray-400 hover:text-gray-600 transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin size={24} className="text-gray-700 hover:text-gray-900 transition" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-gray-700 hover:text-blue-600 ${
                  pathname === item.path ? "font-bold text-blue-800" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebook size={24} className="text-blue-600 hover:text-blue-800 transition" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter size={24} className="text-blue-400 hover:text-blue-600 transition" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedin size={24} className="text-blue-700 hover:text-blue-900 transition" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
