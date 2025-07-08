import React from 'react';

function HeroSection() {
  return (
    <div className="m-3">
      <div className="bg-[url('/we.jpg')] bg-cover bg-center bg-no-repeat rounded-lg h-[600px] sm:h-[700px] md:h-[750px] flex items-center px-4">
        <div className="max-w-4xl w-full text-white p-4 sm:p-8 md:p-12 lg:p-16 rounded-lg">
          
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Freshness in Every Bite
          </p>

          
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white text-justify max-w-2xl">
            From farm to fork, every dish is crafted with premium ingredients and bursting with flavor. Whether you're looking for a hearty meal, a healthy bite, or a sweet treat, we've got something for every craving. Explore our menu and taste the difference of real freshness and culinary care.
          </p>

          
          <button className="mt-6 sm:mt-8 text-white bg-green-500 hover:bg-green-700 text-base sm:text-lg md:text-xl px-6 py-3 rounded-lg transition duration-300">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
