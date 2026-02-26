import React from 'react';
import { ChevronRight } from 'lucide-react';
import { solutionsImage1, solutionsImage2, solutionsImage3 } from '@/assets';
import Image from 'next/image';

const SolutionsSection = () => {
  const cards = [
    {
      title: "Innovating for Sustainability",
      description: "Delivering seamless connectivity, enhanced security, and high-performance solutions designed for a greener future.",
      image: solutionsImage1,
      linkText: "Read More"
    },
    {
      title: "Powering Inclusive Communities Powering Inclusive",
      description: "Delivering seamless connectivity, enhanced security, and high performance for robust and scalable networks. Delivering seamless connectivity, enhanced security, and high performance.",
      image: solutionsImage2,   
      linkText: "Explore More"
    },
    {
      title: "Leading with Purpose",
      description: "Delivering seamless connectivity, enhanced security, and high performance for robust and scalable networks.",
      image: solutionsImage3,
      linkText: "Explore More"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto sm:px-4 py-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[42px] font-forma font-light tracking-widest text-gray-800 uppercase">
          Cutting-Edge Solutions for Industry Leaders
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <article key={index} className="group flex flex-col h-full bg-white transition-all duration-300">
            {/* Image Container */}
            <div className="overflow-hidden aspect-video mb-6">
              <Image 
                src={card.image.src}
                width={450}
                height={300} 
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 min-h-14 leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                {card.description}
              </p>
              
              {/* Action Link */}
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group/link"
                >
                  {card.linkText}
                  <span className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1">
                    <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;