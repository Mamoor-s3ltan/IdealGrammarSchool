import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Hamza Ali",
    role: "Math Teacher",
    quote: "This school management system saved me hours of work every week!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ayesha Khan",
    role: "Science Teacher",
    quote: "The platform is intuitive and easy to use for all staff members.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Bilal Siddiqui",
    role: "Admin",
    quote: "Managing students and staff has never been this efficient.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section id='testimonial'>
    <div className="w-full bg-gray-100 py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#0cd1c3]">Testimonials</h2>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative">
        <div className="text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={prevSlide}>
          <FaChevronLeft size={24} />
        </div>

        <div className="text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide}>
          <FaChevronRight size={24} />
        </div>

        <div className="flex flex-col items-center text-center">
          <FaQuoteLeft className="text-3xl text-[#0cd1c3] mb-4" />
          <p className="text-lg italic mb-6">"{testimonials[index].quote}"</p>
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">{testimonials[index].name}</h3>
          <p className="text-sm text-gray-500">{testimonials[index].role}</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;
