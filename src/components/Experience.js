import React from 'react';

import { BriefcaseIcon } from '@heroicons/react/solid';
import { workplaces } from '../data';

const Experience = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font scroll-mt-20">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Places I've worked
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are some of the places I've worked, working on both B2B and B2C products.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {workplaces.map((workplace) => (
            <a
              href={workplace.link}
              key={workplace.image}
              className="sm:w-1/2 md:w-1/2 lg:w-1/2 w-full p-4"  // changed from w-100 to w-full
            >
              <div className="flex relative">
                <div className="flex items-center justify-center w-full h-full absolute inset-0"> 
                  <img
                    alt="gallery"
                    className="w-auto h-32 sm:h-24 md:h-32 lg:h-40 xl:h-48 object-contain" // reduced height for smaller screens
                    src={workplace.image}
                  />
                </div>
                <div className="px-4 sm:px-8 py-6 sm:py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {workplace.jobTitle}
                  </h2>
                  <h1 className="title-font sm:text-lg text-base font-medium text-white mb-3">
                    {workplace.companyName}
                  </h1>
                  <p className="leading-relaxed">{workplace.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
