"use client"

import { hamburger, logo } from '@/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'BRANDS', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { name: 'SERVICES', href: '#' },
    { name: 'SOLUTIONS', href: '#' },
    { name: 'RESOURCE HUB', href: '#' },
    { name: 'SUPPORT', href: '#' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Image 
              src={logo} 
              alt="ORM Systems Logo" 
              className="h-10 w-auto md:h-12" 
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-gray-800 hover:text-blue-600 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <button className="bg-black text-white px-6 py-3 rounded-sm text-sm font-bold hover:bg-gray-800 transition-all uppercase tracking-wider">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2"
            >
                {isOpen ?
<svg className="h-12 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
                 : 
                <Image src={hamburger} alt="Hamburger Icon" className="" />
                }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-sm font-bold text-gray-800 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-4 bg-black text-white py-3 rounded-sm text-sm font-bold uppercase">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  )
}

export default Header