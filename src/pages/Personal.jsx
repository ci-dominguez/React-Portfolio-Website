import React from 'react';
import observer from '../utils/observer';
const Personal = () => {
  observer();
  return (
    <div className="pt-12 bg-white 4xl:pt-10 5xl:pt-28">
      <div className="pb-20 lg:pb-[175px] 3xl:pb-[300px] text-right text-black px-10 sm:px-16 xl:px-24 5xl:px-64">
        <h2
          id="drop-in-header"
          className="hide font-mabry_probold text-2xl font-mabry_probold xs:text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl"
        >
          ME
        </h2>
        <div className="sm:w-5/6 ml-auto">
          <p
            id="drop-in-text"
            className="hide font-pp_morisemibold mt-10 text-2xl xs:text-3xl md:text-[37px] 2xl:text-4xl 3xl:text-5xl 5xl:text-6xl"
          >
            Incase you missed my name plastered across the home page, Hi! I’m
            Cristian. I never know what to say when talking about myself so we
            should start with something simple. I’m a Mexican-American born and
            raised in San Diego, CA. I love video games, food, horror movies,
            and the Padres.
          </p>
          <p
            id="drop-in-text"
            className="hide font-pp_morisemibold mt-10 text-2xl xs:text-3xl md:text-[37px] 2xl:text-4xl 3xl:text-5xl 5xl:text-6xl"
          >
            I’m proud to have a unique background that combines graphic design
            with web development. Being able to understand the nuances of both
            practices has given me the finesse to tackle any technical and/or
            design challenge. From designing and developing a user-friendly and
            mobile-first front-end to building a reliable back-end I’ve been
            able to specialize in full-stack development to create intuitive
            websites.
          </p>
        </div>
      </div>
      <div className="text-white text-right bg-accent_black mt-24 px-10 sm:px-16 py-24 lg:py-[250px] 3xl:py-[450px] 3xl:px-24 5xl:px-64">
        <h3
          id="drop-in-header"
          className="hide font-mabry_probold text-2xl font-mabry_probold xs:text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl"
        >
          EDUCATION
        </h3>
        <ul>
          <li
            id="drop-in-header"
            className="hide mt-16 md:mt-20 lg:mt-24 font-mabry_probold text-2xl font-mabry_probold xs:text-3xl sm:text-4xl 2xl:text-7xl"
          >
            BA GRAPHIC DESIGN
          </li>
          <li
            id="drop-in-text"
            className="hide font-pp_morisemiregular mt-1 text-2xl xs:text-3xl md:text-[37px] 2xl:text-4xl 3xl:text-5xl"
          >
            San Diego State University - Starting Fall 2023
          </li>
          <li
            id="drop-in-header"
            className="hide mt-10 md:mt-16 lg:mt-24 font-mabry_probold text-2xl font-mabry_probold xs:text-3xl sm:text-4xl 2xl:text-7xl"
          >
            AS WEB DEVELOPMENT
          </li>
          <li
            id="drop-in-text"
            className="hide font-pp_morisemiregular mt-1 text-2xl xs:text-3xl md:text-[37px] 2xl:text-4xl 3xl:text-5xl"
          >
            San Diego Mesa College - May 2023
          </li>
          <li
            id="drop-in-header"
            className="hide mt-10 md:mt-16 lg:mt-24 font-mabry_probold text-2xl font-mabry_probold xs:text-3xl sm:text-4xl 2xl:text-7xl"
          >
            AA FOR TRANSFER STUDIO ARTS
          </li>
          <li
            id="drop-in-text"
            className="hide font-pp_morisemiregular mt-1 text-2xl xs:text-3xl md:text-[37px] 2xl:text-4xl 3xl:text-5xl"
          >
            San Diego Mesa College - May 2023
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Personal;
