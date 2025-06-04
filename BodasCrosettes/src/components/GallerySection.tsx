import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Elegant Ceremonies",
    description: "Timeless settings for your perfect moment",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Ceremony"
  },
  {
    id: 2,
    title: "Luxurious Receptions",
    description: "Stunning venues for unforgettable celebrations",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Reception"
  },
  {
    id: 3,
    title: "Floral Design",
    description: "Breathtaking arrangements that capture your style",
    image: "https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Decor"
  },
  {
    id: 4,
    title: "Intimate Details",
    description: "Personal touches that make your day special",
    image: "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Details"
  },
  {
    id: 5,
    title: "Destination Weddings",
    description: "Dream locations for your special day",
    image: "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Destination"
  },
  {
    id: 6,
    title: "Culinary Excellence",
    description: "Exquisite dining experiences",
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Catering"
  }
];

const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="gallery" className="py-20">
      <div className="container-custom" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title centered">Wedding Portfolio</h2>
          <p className="max-w-2xl mx-auto text-primary-light">
            Explore our collection of magical moments and beautiful celebrations we've had the honor to create.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group overflow-hidden transition-all duration-700 delay-${index * 100} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 bg-white py-1 px-3">
                  <span className="text-xs uppercase tracking-wider text-primary">{item.category}</span>
                </div>
              </div>
              <div className="pt-4 pb-6">
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-primary-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;