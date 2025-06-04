import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [weddingDate, setWeddingDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, weddingDate });
    alert('Thank you for your inquiry! We will contact you soon to discuss your special day.');
    setFormData({ name: '', email: '', phone: '', guestCount: '', message: '' });
    setWeddingDate(null);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title centered">Start Planning Your Dream Wedding</h2>
          <p className="max-w-2xl mx-auto text-primary-light">
            Let's create something magical together. Contact us to begin planning your perfect day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="text-gold mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-primary-light">hello@eternalmoments.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-gold mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-primary-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-gold mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-primary-light">123 Wedding Avenue, New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Names of the Couple
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors"
                  placeholder="e.g., Sarah Smith & James Johnson"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="weddingDate" className="block text-sm font-medium text-primary mb-2">
                  Wedding Date
                </label>
                <DatePicker
                  selected={weddingDate}
                  onChange={(date) => setWeddingDate(date)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors"
                  placeholderText="Select your wedding date"
                  minDate={new Date()}
                />
              </div>
              
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-primary mb-2">
                  Estimated Guest Count
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors"
                  placeholder="e.g., 100"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Tell Us About Your Dream Wedding
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-0 outline-none transition-colors"
                  placeholder="Share your vision, preferences, or any questions you have"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;