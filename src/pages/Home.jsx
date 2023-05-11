import React, { useState } from 'react';
import ExpertiseCards from '../components/ExpertiseCards';
import Form from '../components/Form';
import Down from '../assets/icons/Down.jsx';
import selfie from '../assets/images/selfie.jpg';
import InternalLinkArrow from '../assets/icons/InternalLinkArrow';
import InternalLinkArrowAlt from '../assets/icons/InternalLinkArrowAlt';
import ExternalLinkArrow from '../assets/icons/ExternalLinkArrow';
import spot from '../assets/images/spotpreview.webp';
import nueliving from '../assets/images/nuelivingpreview.webp';
import podoba from '../assets/images/podobapreview.webp';
import observer from '../utils/observer';
const Home = () => {
  observer();
  return (
    <div className="pt-12 bg-white 4xl:pt-10 5xl:pt-28">
      <div className="px-10 sm:px-16 xl:px-24 5xl:px-64">
        <div className="text-right text-black">
          <div
            id="drop-in-header"
            className="hide font-pp_morisemibold text-4xl leading-none mb-1 xs:text-[55px] sm:text-[77px] md:text-[99.125px] lg:text-[138.85px] lg:mb-2 xl:text-[168.5px] 2xl:text-[208px] 3xl:text-[236.5px] 4xl:text-[265px] 5xl:text-[300px]"
          >
            <h1 className="4xl:mb-0">Cristian Isaac</h1>
            <h1>Dominguez,</h1>
          </div>
          <h3
            id="drop-in-text"
            className="hide font-mabry_probold text-md xs:text-xl sm:text-[29.125px] sm:mt-4 md:text-[37px] lg:text-[52.5px] lg:mt-10 xl:text-[63.5px] xl:mt-12 2xl:text-[78.75px] 2xl:mt-20 3xl:text-[89.5px] 4xl:text-[100.25px] 4xl:mt-16 5xl:text-[113.5px] 5xl:mt-24 5xl:pb-10"
          >
            DESIGN AND DEVELOPMENT
          </h3>
          <div id="fade-img" className="hide">
            <Down className="hidden lg:block h-10 ml-auto mt-16 3xl:h-[80px] 5xl:h-[125px] 5xl:mt-28" />
          </div>
        </div>
        {/* End Title */}
        <div className="mt-16 4xl:mt-36 lg:py-[175px] 5xl:py-[350px]">
          <div className="text-right lg:flex lg:flex-row">
            <img
              src={selfie}
              alt="Picture of Cristian Dominguez"
              id="fade-img"
              className="hide ml-auto w-full lg:hidden lg:mx-6"
            />
            <div className="text-black flex flex-col lg:px-6 3xl:mt-10 4xl:mt-1 4xl:px-12">
              <h2
                id="drop-in-header"
                className="hide font-mabry_probold mt-10 lg:mt-4 text-2xl xs:text-3xl md:text-[37px] 2xl:text-4xl 3xl:text-5xl 5xl:text-7xl"
              >
                WHAT I DO
              </h2>
              <p
                id="drop-in-text"
                className="hide font-pp_morisemibold text-lg mt-4 xs:text-2xl xl:text-xl 2xl:w-3/4 2xl:ml-auto 2xl:text-2xl 3xl:w-4/5 4xl:w-2/3 4xl:text-3xl 5xl:text-5xl 5xl:w-full"
              >
                I’m a full-stack developer and designer who specializes in
                creating future-facing websites, meaningful products, and other
                interactive digital experiences.
              </p>
              <h2
                id="drop-in-header"
                className="hide font-mabry_probold text-2xl mt-6 xs:text-3xl md:text-[37px] lg:mt-6 2xl:text-4xl 3xl:text-5xl 5xl:text-7xl"
              >
                HOW I WORK
              </h2>
              <p
                id="drop-in-text"
                className="hide font-pp_morisemibold text-lg mt-4 xs:text-2xl xl:text-xl 2xl:w-3/4 2xl:ml-auto 2xl:text-2xl 2xl:w-4/5 3xl:w-3/4 4xl:text-3xl 4xl:w-2/3 5xl:text-5xl 5xl:w-full"
              >
                My full-stack development takes a holistic approach, blending
                UX/UI design, graphic design, and front-end technology with my
                back-end knowledge to create seamless and intuitive websites.
              </p>
            </div>
            <img
              src={selfie}
              alt="Picture of Cristian Dominguez"
              id="fade-img"
              className="hide hidden ml-auto h-[252px] lg:inline lg:ml-6 xl:h-[378px] 2xl:h-[504px] 5xl:h-[756px]"
            />
          </div>
        </div>{' '}
        {/* End Info */}
      </div>{' '}
      {/* End Intro */}
      <div className="bg-accent_black mt-24 px-10 sm:px-16 py-24 lg:py-[250px] 3xl:py-[450px] 3xl:px-24 5xl:px-64 5xl:py-[625px]">
        <div>
          <div className="flex flex-col mb-4 sm:flex-row">
            <a
              href="/portfolio"
              id="drop-in-header"
              className="hide flex flex-row ml-auto border-b-4 border-white mb-3 4xl:mr-auto 4xl:ml-0 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <InternalLinkArrow className="ml-auto mt-auto mb-2 mr-1 h-[20px] md:h-[22px] lg:h-[40px] xl:h-[48px] xl:mb-3 4xl:h-[62px] 4xl:mb-4 4xl:mr-3 5xl:h-[80px] 5xl:mb-5 5xl:mr-4" />
              <div className="text-white font-mabry_probold text-2xl xs:text-3xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 4xl:text-8xl 5xl:text-9xl">
                VIEW MY WORK
              </div>
            </a>

            <a
              href="https://codepen.io/ci-dominguez"
              target="_blank"
              id="drop-in-text"
              className="hide flex flex-row border-b-4 border-white ml-auto mb-2 sm:mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <div className="text-white font-mabry_probold text-xl mt-auto ml-auto xs:text-2xl sm:leading-none sm:mb-1 sm:text-xl md:text-2xl md:leading-none lg:text-3xl lg:leading-none xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl">
                CODEPEN
              </div>
              <ExternalLinkArrow className="h-[16px] ml-1 mt-auto mb-2 sm:h-[15px] md:h-[18px] lg:h-[22px] xl:h-[28px] xl:mb-3 2xl:h-[32px] 3xl:h-[42px] 3xl:mb-4 4xl:h-[48px]" />
            </a>

            <a
              href="https://github.com/ci-dominguez"
              target="_blank"
              id="drop-in-text"
              className="hide flex flex-row border-b-4 border-white ml-auto mb-2 sm:mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <div className="text-white font-mabry_probold text-xl ml-auto xs:text-2xl mt-auto sm:leading-none sm:mb-1 sm:text-xl md:text-2xl md:leading-none lg:text-3xl lg:leading-none xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl">
                GITHUB
              </div>
              <ExternalLinkArrow className="h-[16px] ml-1 mt-auto mb-2 sm:h-[15px] md:h-[18px] lg:h-[22px] xl:h-[28px] xl:mb-3 2xl:h-[32px] 3xl:h-[42px] 3xl:mb-4 4xl:h-[48px]" />
            </a>
          </div>{' '}
          {/* End Quick Links Row 1 */}
          <div className="flex flex-col sm:flex-row">
            <a
              href="#contact"
              id="drop-in-header"
              className="hide flex flex-row ml-auto border-b-4 border-white mb-3 4xl:mr-auto 4xl:ml-0 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <InternalLinkArrow className="ml-auto mt-auto mb-2 mr-1 h-[20px] md:h-[22px] lg:h-[40px] xl:h-[48px] xl:mb-3 4xl:h-[62px] 4xl:mb-4 4xl:mr-3 5xl:h-[80px] 5xl:mb-5 5xl:mr-4" />
              <div className="text-white font-mabry_probold text-2xl xs:text-3xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl 4xl:text-8xl 5xl:text-9xl">
                CONTACT ME
              </div>
            </a>

            <a
              href="https://www.instagram.com/ci_dominguez/"
              target="_blank"
              id="drop-in-text"
              className="hide flex flex-row border-b-4 border-white ml-auto mb-2 sm:mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <div className="text-white font-mabry_probold text-xl ml-auto xs:text-2xl mt-auto sm:leading-none sm:mb-1 sm:text-xl md:text-2xl md:leading-none lg:text-3xl lg:leading-none xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl">
                INSTAGRAM
              </div>
              <ExternalLinkArrow className="h-[16px] ml-1 mt-auto mb-2 sm:h-[15px] md:h-[18px] lg:h-[22px] xl:h-[28px] xl:mb-3 2xl:h-[32px] 3xl:h-[42px] 3xl:mb-4 4xl:h-[48px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/ci-dominguez/"
              target="_blank"
              id="drop-in-text"
              className="hide flex flex-row border-b-4 border-white ml-auto mb-2 sm:mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <div className="text-white font-mabry_probold text-xl ml-auto xs:text-2xl mt-auto sm:leading-none sm:mb-1 sm:text-xl md:text-2xl md:leading-none lg:text-3xl lg:leading-none xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl">
                LINKEDIN
              </div>
              <ExternalLinkArrow className="h-[16px] ml-1 mt-auto mb-2 sm:h-[15px] md:h-[18px] lg:h-[22px] xl:h-[28px] xl:mb-3 2xl:h-[32px] 3xl:h-[42px] 3xl:mb-4 4xl:h-[48px]" />
            </a>
          </div>{' '}
          {/* End Quick Links Part 2 */}
        </div>{' '}
        {/* End Quick Links Content Child, Absolute*/}
      </div>
      {/* End Quick Links Wrapper Parent, Relative*/}
      <ExpertiseCards />
      <div className="flex flex-col text-right text-black mt-24 px-10 sm:px-0 pb-16 bg-white lg:py-[175px] 5xl:py-[350px]">
        <h2
          id="drop-in-header"
          className="hide text-2xl font-mabry_probold xs:text-3xl sm:px-16 3xl:px-24 xl:px-24 md:text-[37px] lg:text-6xl 2xl:text-7xl 5xl:px-64"
        >
          NEW PROJECTS
        </h2>

        <div className="mt-10 lg:flex lg:flex-row lg:pl-16">
          <sup className="font-intermedium pr-1 lg:pt-4 3xl:pl-24 3xl:text-2xl pl-8 sm:px-16 lg:px-0 lg:pl-12 5xl:pl-64">
            01
          </sup>
          <div className="lg:ml-auto lg:pr-4 ">
            <h2
              id="drop-in-header"
              className="hide font-pp_morisemibold text-2xl sm:pr-16 md:text-3xl lg:text-4xl lg:ml-auto lg:pr-0 xl:text-5xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <a href="/portfolio">SPOT</a>
            </h2>
            <ul
              id="drop-in-text"
              className="hide font-pp_morisemibold text-[18px] leading-none pt-2 3xl:text-3xl sm:px-16 lg:px-0 xl:text-2xl"
            >
              <li>REACT TAILWINDCSS</li>
              <li>ILLUSTRATOR</li>
              <li>PHOTOSHOP</li>
              <li>INDESIGN</li>
              <li>FIGMA</li>
            </ul>
          </div>
          <div className="lg:flex lg:flex-col lg:pr-16 xl:pr-24 3xl:pr-24 5xl:pr-64">
            <p
              id="drop-in-text"
              className="hide font-pp_morisemibold text-sm xs:text-lg sm:pr-16 lg:mr-auto 2xl:text-2xl"
            >
              BRANDING/ WEB DEVELOPMENT
            </p>
            <a href="/portfolio">
              <img
                src={spot}
                alt="Spot Adoption Logo"
                id="fade-img"
                className="hide lg:w-[580px] lg:h-[245px] 2xl:h-[337.5px] 2xl:w-[870px] sm:px-16 lg:px-0"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 lg:flex lg:flex-row lg:pl-16">
          <sup className="font-intermedium pr-1 lg:pt-4 3xl:pl-24 3xl:text-2xl pl-8 sm:px-16 lg:px-0 lg:pl-12 5xl:pl-64">
            02
          </sup>
          <div className="lg:ml-auto lg:pr-4">
            <h2
              id="drop-in-header"
              className="hide font-pp_morisemibold text-2xl sm:pr-16 md:text-3xl lg:text-4xl lg:ml-auto lg:pr-0 xl:text-5xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <a href="/portfolio">NUE LIVING</a>
            </h2>
            <ul
              id="drop-in-text"
              className="hide font-pp_morisemibold text-[18px] leading-none pt-2 3xl:text-3xl sm:px-16 lg:px-0 xl:text-2xl"
            >
              <li>NEXTJS MONGODB</li>
              <li>TAILWINDCSS</li>
              <li>NEXTAUTH</li>
            </ul>
          </div>
          <div className="lg:flex lg:flex-col lg:pr-16 xl:pr-24 3xl:pr-24 5xl:pr-64">
            <p
              id="drop-in-text"
              className="hide font-pp_morisemibold text-sm xs:text-lg sm:pr-16 lg:mr-auto 2xl:text-2xl"
            >
              WEB DEVELOPMENT/ ECOMMERCE
            </p>
            <a href="/portfolio">
              <img
                src={nueliving}
                alt="Nue Living Logo"
                id="fade-img"
                className="hide lg:w-[580px] lg:h-[245px] 2xl:h-[337.5px] 2xl:w-[870px] sm:px-16 lg:px-0"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 lg:flex lg:flex-row lg:pl-16">
          <sup className="font-intermedium pr-1 lg:pt-4 3xl:pl-24 3xl:text-2xl pl-8 sm:px-16 lg:px-0 lg:pl-12 5xl:pl-64 ">
            03
          </sup>
          <div className="lg:ml-auto lg:pr-4">
            <h2
              id="drop-in-header"
              className="hide font-pp_morisemibold text-2xl sm:pr-16 md:text-3xl lg:text-4xl lg:ml-auto lg:pr-0 xl:text-5xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <a href="/portfolio">PODOBA</a>
            </h2>
            <ul
              id="drop-in-text"
              className="hide font-pp_morisemibold text-[18px] leading-none pt-2 3xl:text-3xl sm:px-16 lg:px-0 xl:text-2xl"
            >
              <li>REACT FLASK</li>
              <li>OPEN-AI</li>
            </ul>
          </div>

          <div className="lg:flex lg:flex-col lg:pr-16 3xl:pr-24 xl:pr-24 5xl:pr-64">
            <p
              id="drop-in-text"
              className="hide font-pp_morisemibold text-sm xs:text-lg sm:pr-16 lg:mr-auto 2xl:text-2xl"
            >
              WEB DEVELOPMENT/ APIs
            </p>
            <a href="/portfolio">
              <img
                src={podoba}
                alt="Podoba Logo"
                id="fade-img"
                className="hide lg:w-[580px] lg:h-[245px] 2xl:h-[337.5px] 2xl:w-[870px] sm:px-16 lg:px-0"
              />
            </a>
          </div>
        </div>

        <div
          id="drop-in-header"
          className="hide ml-auto border-b-4 border-black mt-8 sm:mr-16 3xl:mr-24 xl:mr-24 5xl:mr-64 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
        >
          <a className="flex flex-row" href="/portfolio">
            <InternalLinkArrowAlt className="ml-auto mt-auto mb-2 mr-1 h-[12px] xs:h-[15px] md:h-[18px] xl:h-[22px] 4xl:h-[30px] 4xl:mr-2" />
            <div className="text-black font-mabry_probold text-xl xs:text-2xl md:text-3xl xl:text-4xl 4xl:text-5xl">
              VIEW ALL
            </div>
          </a>
        </div>
      </div>{' '}
      {/* Projects*/}
      <div id="contact" className="text-white">
        |
      </div>
      <Form />
    </div> /* End Home */
  );
};

export default Home;
