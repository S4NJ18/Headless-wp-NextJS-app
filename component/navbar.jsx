"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // const handleLinkClick = () => {
  //   setIsOpen(false); // close menu on link click
  // };

  const handleClose = () => setIsOpen(false);

  const navItems = [
    { label: "Home", href: "/" },
     { label: "Blog", href: "/blog" },
    { label: "About", href: "/about-us" },
    { label: "Contact US", href: "/contact-us" },
   
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="border-b border-[#132238]">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#a53dff] px-5 py-2">
              <span className="text-white text-2xl font-medium">W</span>
            </div>
            <h2 className="text-[28px] font-semibold text-[#132238]">
              Headless
            </h2>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#132238] focus:outline-none"
              aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navigation - Desktop & Mobile */}
          <div
            className={`
              ${isOpen ? "block" : "hidden"}
              md:flex md:items-center md:static absolute top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent z-40 md:z-auto shadow-md md:shadow-none
              transition-all duration-300 ease-in-out
            `}>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 p-6 md:p-0 items-start md:items-center">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  onClick={handleClose}
                  className="px-6 py-3 flex gap-2.5 justify-center items-center leading-[65px] hover:bg-blue-50 transition-all duration-300 group cursor-pointer rounded w-full md:w-auto">
                  <p className="text-base leading-6 text-[#333333] text-gray-800 font-semibold antialiased md:subpixel-antialiased tracking-wide group-hover:text-blue-700 transition duration-300">
                    <Link
                      href={item.href}
                      className="text-gray-800 font-semibold">
                      {item.label}
                    </Link>
                  </p>
                </div>
              ))}

              <Link href={'https://github.com/S4NJ18/Headless-wp-NextJS-app'} target="_blank"
                onClick={handleClose}
                className="rounded px-6 py-3 flex gap-3 justify-center items-center bg-[#a53dff] w-full md:w-auto">
                <p className="text-base leading-6 text-white font-semibold">
                  Github Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarComponent;