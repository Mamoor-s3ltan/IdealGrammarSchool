import React from 'react';
import { FaGlobe, FaUsers, FaBook, FaCog, FaPencilRuler, FaChalkboardTeacher } from 'react-icons/fa';
import hero_img from '../assets/hero_img.jpg'

const categories = [
  { icon: <FaGlobe size={30} />, label: 'Language', color: 'bg-blue-500' },
  { icon: <FaUsers size={30} />, label: 'Business', color: 'bg-teal-400' },
  { icon: <FaBook size={30} />, label: 'Literature', color: 'bg-indigo-500' },
  { icon: <FaCog size={30} />, label: 'Software', color: 'bg-orange-400' },
  { icon: <FaPencilRuler size={30} />, label: 'Design', color: 'bg-gray-700' },
  { icon: <FaChalkboardTeacher size={30} />, label: 'Coaching', color: 'bg-cyan-500' },
];

const HeroSection = () => {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${hero_img})`,
          backgroundAttachment:"fixed", 
        }}
      >
        {/* Overlay */}
        <div className="bg-black/40 w-full h-full absolute top-0 left-0 z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">We Can Teach You!</h1>
          <p className="text-lg md:text-xl mb-6">Create an all-encompassing website for your school with ease.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#0cd1c3] text-white cursor-pointer font-semibold px-6 py-3 rounded-full">LEARN MORE</button>
          </div>
        </div>
      </div>

      {/* Category Boxes */}
      <div className="grid grid-cols-2 relative z-10 sm:grid-cols-3 md:grid-cols-6 gap-4 p-6 bg-white text-center ">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-white p-4 rounded-md ${item.color}`}
          >
            {item.icon}
            <span className="mt-2 font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
