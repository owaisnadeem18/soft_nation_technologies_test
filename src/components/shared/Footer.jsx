import React from 'react';
import { Facebook, Twitter, Linkedin, Phone } from 'lucide-react';
import { logo } from '@/assets'; // Assuming same logo path as header
import Image from 'next/image';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="mb-8">
          <Image src={logo} alt="ORM Systems" className="h-16 w-auto" />
        </div>

        {/* Description Text */}
        <p className="max-w-3xl text-center text-sm md:text-base text-gray-400 mb-10 leading-relaxed">
          Maecenas et vestibulum dolor. Proin orci mauris, fermentum quis turpis non, 
          consectetur pretium dui. Duis congue sollicitudin metus, a volutpat odio accumsan eget.
        </p>

        {/* Contact and Navigation Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 gap-6 md:gap-0">
          
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-white" />
            <span className="text-sm font-medium">000-000-000</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Email */}
          <div className="text-sm font-medium">
            info@ifogroup.com
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            Copyright © 2023 Ifo Group Safety, Risk & Fire Consultants. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="border border-gray-700 p-2 rounded-sm hover:bg-white hover:text-black transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;