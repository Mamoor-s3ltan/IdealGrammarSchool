import React from 'react'
import { RiTeamFill,RiLightbulbFlashFill, RiCustomerService2Fill } from "react-icons/ri";
import About_img from '../assets/about_img.jpg'

const About = () => {
  return (
    <section id='about' className='p-5' >
        <div>
            <h2 className='text-[#0cd1c3] font-manrope text-center mt-5 mb-5 text-3xl font-bold '>About Us</h2>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Image */}
    <div className="w-full md:w-1/2">
      <img
        src={About_img}
        alt="About Us"
        className="rounded-2xl shadow-lg w-full"
      />
    </div>

    {/* Text Content */}
    <div className="w-full md:w-1/2">
      <p className="text-gray-600 text-base md:text-lg mb-6">
        We are a passionate team dedicated to delivering high-quality solutions that make an impact.
        With a strong background in technology, design, and customer service, we aim to exceed client expectations
        through continuous innovation and commitment.
      </p>
      <p className="text-gray-600 text-base md:text-lg">
        Our mission is to help businesses grow by leveraging cutting-edge tools and delivering tailored strategies
        that drive success. Join us on this journey of transformation and excellence.
      </p>
    </div>
  </div>

    
    {/* Card  */}

<div className="px-4 py-10 mt-5 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <div className="flex items-center flex-col justify-center text-center">
            <RiTeamFill className="text-blue-500 mb-2" size={30} />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Team Collaboration
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Boost productivity with seamless collaboration tools and project coordination.
            </p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#0cd1c3] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <div className="flex items-center flex-col justify-center text-center">
            <RiLightbulbFlashFill className="text-yellow-500 mb-2" size={30} />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Innovative Solutions
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We craft smart solutions that simplify workflows and drive innovation.
            </p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#0cd1c3] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <div className="flex items-center flex-col justify-center text-center">
            <RiCustomerService2Fill className="text-green-500 mb-2" size={30} />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Customer Support
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our team is available 24/7 to ensure you get the help you need—fast.
            </p>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#0cd1c3] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>


    </section>
  )
}

export default About