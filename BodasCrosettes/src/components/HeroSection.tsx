import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: 'url("https://images.pexels.com/photos/1779415/pexels-photo-1779415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container-custom relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wider">
            ETERNAL MOMENTS
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8 tracking-wide">
            Creating unforgettable wedding experiences with elegance and grace
          </p>
          <a 
            href="#services" 
            className="btn-gold tracking-wider px-10"
          >
            PLAN YOUR DREAM WEDDING
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Discover More</span>
        <div className="w-0.5 h-8 bg-gold animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;