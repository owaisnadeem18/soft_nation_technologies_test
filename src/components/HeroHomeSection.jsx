import { heroImgBg } from '@/assets';
import React from 'react';

const HeroHomeSection = () => {
  return (
    <section 
      className="relative w-full flex items-center overflow-hidden bg-[#051923]"
      style={{
        // 1. Image as Background (Public folder mein image rakho)
        backgroundImage: `url(${heroImgBg.src})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(100vh - 96px)'
      }}
    >
      {/* 2. Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-0" />

      {/* 3. Content Container */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Empty or for Visual Balance (Since workers are on the left) */}
          <div className="hidden lg:block">
            {/* Yahan aap wo wavy blue lines ka SVG daal sakte hain */}
          </div>

          {/* Right Side: Text Content */}
          <div className="text-white max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">
              Data Center Transformation
            </p>
            
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] font-normal mb-6 font-['Forma_DJR_Micro']">
              Revolutionizing Your <br className="hidden sm:block" /> 
              Data Center <br className="hidden sm:block" /> 
              Infrastructure
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg mb-10 leading-relaxed max-w-md">
              Transform outdated systems into scalable, future-ready infrastructures 
              with advanced solutions to boost efficiency, reliability, and security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
              <button className="bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto">
                Talk to an expert
              </button>
              
              <a 
                href="#" 
                className="text-white text-sm font-bold uppercase tracking-wider border-b-2 border-transparent hover:border-cyan-500 transition-all duration-300"
              >
                Get an instant quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Decorative Elements (The Blue Lines) */}
      <div className="absolute left-0 bottom-0 w-1/2 h-full pointer-events-none opacity-40 z-0">
        {/* Yahan SVG ya PNG lines use karein jo image_5ed9dd mein hain */}
      </div>
    </section>
  );
};

export default HeroHomeSection;