import React from 'react';
import observer from '../utils/observer';
import InternalLinkArrowAlt from '../assets/icons/InternalLinkArrowAlt';
const Blog = () => {
  observer();
  return (
    <div className="pt-12 bg-white 4xl:pt-10 5xl:pt-28">
      <div className="pb-20 lg:pb-[175px] 3xl:pb-[300px] text-right text-black px-10 sm:px-16 xl:px-24 5xl:px-64">
        <h2
          id="drop-in-header"
          className="hide font-mabry_probold text-2xl font-mabry_probold xs:text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl"
        >
          BLOG
        </h2>
        <div className="sm:w-5/6 ml-auto">
          <p
            id="drop-in-text"
            className="hide font-pp_morisemibold mt-10 text-2xl xs:text-3xl md:text-[37px] 2xl:text-4xl 3xl:text-5xl 5xl:text-6xl"
          >
            Unfortunately my blog is currently offline. While I get working on
            that, you should take a look at my{' '}
            <a href="/portfolio" className="border-b-4 border-black pb-1">
              portfolio
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
