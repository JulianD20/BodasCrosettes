import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container-custom" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="section-title">Your Perfect Day</h2>
            <p className="mb-6 text-primary leading-relaxed">
              Since 2015, Eternal Moments has been crafting extraordinary weddings that reflect each couple's unique love story and vision.
            </p>
            <p className="mb-6 text-primary leading-relaxed">
              Our dedicated team of wedding planners brings together creativity, attention to detail, and years of experience to ensure your special day is nothing short of magical.
            </p>
            <p className="mb-8 text-primary leading-relaxed">
              From intimate gatherings to grand celebrations, we handle every aspect of your wedding with care and precision, allowing you to fully embrace every moment of your journey.
            </p>
            <a href="#services" className="btn-outline">Explore Our Services</a>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Wedding planning session"
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 text-white">
                <p className="font-serif text-2xl">Since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;