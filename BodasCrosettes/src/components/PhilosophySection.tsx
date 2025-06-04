import React, { useRef } from 'react';
import { Heart, Star, Clock, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-8 border border-sand">
      <div className="text-gold flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-3">{title}</h3>
      <p className="text-primary-light leading-relaxed">{description}</p>
    </div>
  );
};

const PhilosophySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="container-custom" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title centered">Our Approach</h2>
          <p className="max-w-2xl mx-auto text-primary-light">
            We believe every wedding should be as unique as the couple celebrating their love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Value 
              icon={<Heart size={32} />} 
              title="Personalized Service" 
              description="Every detail is tailored to reflect your unique love story and vision."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Value 
              icon={<Star size={32} />} 
              title="Excellence" 
              description="We partner with the finest vendors to ensure exceptional quality in every aspect."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Value 
              icon={<Clock size={32} />} 
              title="Timely Planning" 
              description="Stress-free planning process with careful attention to timelines and details."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Value 
              icon={<Sparkles size={32} />} 
              title="Magical Moments" 
              description="Creating unforgettable experiences that you'll cherish forever."
            />
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h3 className="text-3xl font-serif mb-4">Your Dream Wedding Awaits</h3>
              <p className="mb-4 text-primary-light leading-relaxed">
                From the first consultation to the final dance, we're dedicated to making your wedding planning journey as memorable as the celebration itself.
              </p>
              <p className="mb-6 text-primary-light leading-relaxed">
                Our experienced team handles every detail with precision and care, ensuring your special day unfolds exactly as you've imagined.
              </p>
              <a href="#contact" className="btn-outline">Start Planning Today</a>
            </div>
            
            <div className={`order-1 lg:order-2 transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <img 
                src="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Wedding celebration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;