import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  date: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Eternal Moments made our dream wedding a reality. Their attention to detail and dedication to our vision was beyond exceptional. Every moment was perfect!",
    author: "Sarah & James",
    date: "June 2023",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    text: "Working with the Eternal Moments team was the best decision we made. They transformed our ideas into something even more magical than we imagined.",
    author: "Emily & Michael",
    date: "September 2023",
    image: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    text: "From the stunning venue to the smallest details, everything was absolutely perfect. Our guests are still talking about how beautiful our wedding was!",
    author: "Jessica & David",
    date: "December 2023",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-sand">
      <div className="container-custom" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title centered">Happy Couples</h2>
          <p className="max-w-2xl mx-auto text-primary-light">
            Read what our couples say about their wedding experience with us.
          </p>
        </div>
        
        <div className={`relative max-w-4xl mx-auto transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white p-8 md:p-12 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-primary text-lg italic mb-6 leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>
                <div>
                  <h4 className="font-serif text-xl mb-1">{testimonials[activeIndex].author}</h4>
                  <p className="text-primary-light">{testimonials[activeIndex].date}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 text-primary hover:text-gold transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-gold' : 'bg-gray-300'}`}
              />
            ))}
            <button 
              onClick={nextTestimonial}
              className="p-2 text-primary hover:text-gold transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className={`mt-20 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif mb-4">Featured Weddings</h3>
            <p className="max-w-2xl mx-auto text-primary-light">
              Take a glimpse at some of our recent celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            ].map((image, index) => (
              <div key={index} className="overflow-hidden group">
                <img 
                  src={image} 
                  alt={`Wedding celebration ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;