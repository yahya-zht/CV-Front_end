"use client";

import { useState } from "react";

import { COLORS } from "@/constants/theme";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo/logo_cv.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: COLORS.primary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="CV Logo"
                width={45}
                height={45}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex flex-1 items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="/templates"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                Templates
              </a>

              <a
                href="/pricing"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                Pricing
              </a>

              <a
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                About
              </a>
            </div>
          </div>

          {/* Desktop Create CV */}
          <div className="hidden sm:flex items-center">
            <a
              href="/create"
              className="rounded-xl bg-white px-6 py-2 font-bold text-gray-900 hover:bg-blue-950 hover:text-white"
            >
              Create CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                // X icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-white/10 py-3">
            <div className="flex flex-col space-y-1">

              <a
                href="/templates"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-gray-200 hover:bg-white/10 hover:text-white"
              >
                Templates
              </a>

              <a
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-gray-200 hover:bg-white/10 hover:text-white"
              >
                Pricing
              </a>

              <a
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-gray-200 hover:bg-white/10 hover:text-white"
              >
                About
              </a>

              <a
                href="/create"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center font-bold text-gray-900 hover:bg-blue-950 hover:text-white"
              >
                Create CV
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
