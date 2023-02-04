import React from 'react';

const About = () => {
  return (
    <section id="about" className='scroll-mt-20'>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Tom.
            <br className="hidden lg:inline-block" />
            I'm a frontend developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I previously attended Makers Academy, and I'm currently working as a frontend developer at <span className='text-teal-500'><a href='https://www.thortful.com/'>thortful</a></span>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="./portfolio_image.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
