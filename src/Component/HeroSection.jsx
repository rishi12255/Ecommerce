import React from 'react';

function HeroSection() {
  return (
    <div className="relative rounded-lg overflow-hidden m-3">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/pizzaesbg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Fallback background if video fails */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[750px] px-4 py-10">
        <div className="text-center max-w-3xl w-full text-white p-4 sm:p-6 md:p-8 lg:p-12">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Delicious Moments Delivered
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium drop-shadow-sm text-white">
            Savor the taste of freshly prepared meals made with love and the finest ingredients. Fast delivery. Irresistible flavor. No compromises.
          </p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
