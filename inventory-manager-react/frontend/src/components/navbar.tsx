"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ReactNode } from "react";

// Define the links in the navbar
const links = [
  { href: "/", text: "Koti" },
  { href: "/about", text: "Tietoa" },
  { href: "/contact", text: "Ota yhteyttä" },
];

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

// TODO: Custom link component before we start using the Next.js Link component
const CustomLink = ({ href, children, className }: LinkProps) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${className}`}
  >
    {children}
  </a>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-xl font-bold">InventaarioAPP</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <CustomLink key={link.href} href={link.href}>
                  {link.text}
                </CustomLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <CustomLink
                key={link.href}
                href={link.href}
                className="block rounded-md"
              >
                {link.text}
              </CustomLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
