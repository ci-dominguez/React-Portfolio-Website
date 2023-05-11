import React from 'react';
import ExternalLinkArrowAlt from '../assets/icons/ExternalLinkArrowAlt';
import InternalLinkArrowAlt from '../assets/icons/InternalLinkArrowAlt';

const Footer = () => {
  return (
    <footer>
      <div className="bg-white px-10 sm:px-16 xl:px-24 py-16 flex flex-col 5xl:px-64 lg xl:py-[350px] 5xl:py-[500px]">
        <h2
          id="drop-in-header"
          className="text-black text-right font-pp_morisemibold hide text-2xl xs:text-3xl md:text-[37px] lg:text-6xl 5xl:text-7xl pb-10"
        >
          Take your time, look around, and see what I'm all about.
        </h2>
        <div id="drop-in-text" className="hide md:flex md:flex-row md:ml-auto">
          <div className="flex flex-col md:flex-row mt-6">
            <div className="flex flex-row border-b-4 border-black ml-auto mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <a
                href="/portfolio"
                className="text-black font-mabry_probold text-2xl mt-auto ml-auto sm:mb-1 lg:text-3xl 2xl:text-5xl 5xl:text-6xl"
              >
                PORTFOLIO
              </a>
              <InternalLinkArrowAlt className="ml-1 mt-auto mb-3 h-[20px] 2xl:h-[32px] 2xl:ml-2 2xl:mb-3 5xl:h-[40px] 5xl:ml-4" />
            </div>

            <div className="flex flex-row border-b-4 border-black ml-auto md:ml-6 mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <a
                href="/personal"
                className="text-black font-mabry_probold text-2xl mt-auto ml-auto sm:mb-1 lg:text-3xl 2xl:text-5xl 5xl:text-6xl"
              >
                PERSONAL
              </a>
              <InternalLinkArrowAlt className="ml-1 mt-auto mb-3 h-[20px] 2xl:h-[32px] 2xl:ml-2 2xl:mb-3 5xl:h-[40px] 5xl:ml-4" />
            </div>
            <div className="flex flex-row border-b-4 border-black ml-auto md:ml-6 mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <a
                href="/contact"
                className="text-black font-mabry_probold text-2xl mt-auto ml-auto sm:mb-1 lg:text-3xl 2xl:text-5xl 5xl:text-6xl"
              >
                CONTACT
              </a>
              <InternalLinkArrowAlt className="ml-1 mt-auto mb-3 h-[20px] 2xl:h-[32px] 2xl:ml-2 2xl:mb-3 5xl:h-[40px] 5xl:ml-4" />
            </div>

            <div className="flex flex-row border-b-4 border-black ml-auto md:ml-6 mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <a
                href="/blog"
                className="text-black font-mabry_probold text-2xl mt-auto ml-auto sm:mb-1 lg:text-3xl 2xl:text-5xl 5xl:text-6xl"
              >
                BLOG
              </a>
              <InternalLinkArrowAlt className="ml-1 mt-auto mb-3 h-[20px] 2xl:h-[32px] 2xl:ml-2 2xl:mb-3 5xl:h-[40px] 5xl:ml-4" />
            </div>
          </div>
        </div>

        <div
          id="drop-in-text"
          className="hide md:flex md:flex-row md:ml-auto mt-6"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row border-b-4 border-black ml-auto mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <a
                href="https://codepen.io/ci-dominguez"
                target="_blank"
                className="text-black font-mabry_probold text-2xl mt-auto ml-auto sm:mb-1 lg:text-3xl 2xl:text-5xl 5xl:text-6xl"
              >
                CODEPEN
              </a>
              <ExternalLinkArrowAlt className="ml-1 mt-auto mb-2 h-[20px] 2xl:h-[32px] 2xl:ml-2 2xl:mb-3 5xl:h-[40px] 5xl:ml-4" />
            </div>
            <div className="flex flex-row border-b-4 border-black ml-auto md:ml-6 mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <a
                href="https://www.linkedin.com/in/ci-dominguez/"
                target="_blank"
                className="text-black font-mabry_probold text-2xl mt-auto ml-auto sm:mb-1 lg:text-3xl 2xl:text-5xl 5xl:text-6xl"
              >
                LINKEDIN
              </a>
              <ExternalLinkArrowAlt className="ml-1 mt-auto mb-2 h-[20px] 2xl:h-[32px] 2xl:ml-2 2xl:mb-3 5xl:h-[40px] 5xl:ml-4" />
            </div>
            <div className="flex flex-row border-b-4 border-black ml-auto md:ml-6 mb-3 5xl:border-b-8 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <a
                href="https://github.com/ci-dominguez"
                target="_blank"
                className="text-black font-mabry_probold text-2xl mt-auto ml-auto sm:mb-1 lg:text-3xl 2xl:text-5xl 5xl:text-6xl"
              >
                GITHUB
              </a>
              <ExternalLinkArrowAlt className="ml-1 mt-auto mb-2 h-[20px] 2xl:h-[32px] 2xl:ml-2 2xl:mb-3 5xl:h-[40px] 5xl:ml-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
