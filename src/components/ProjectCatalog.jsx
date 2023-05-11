import React, { useState } from 'react';
import { portfoliodata } from '../utils/portfoliodata';
import observer from '../utils/observer';

const ProjectCatalog = () => {
  const [search, setSearch] = useState('');
  console.log(search);
  observer();
  return (
    <div className="pb-20 3xl:pb-[300px]">
      <div className="flex flex-row">
        <input
          id="fade-img"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Something..."
          className="hide w-full ml-auto text-right placeholder-black placeholder-opacity-75 tracking-[.75px] bg-transparent border-b-4 border-black xs:text-xl md:text-2xl font-pp_morisemibold 5xl:text-4xl 5xl:mt-10 mb-6"
        />
      </div>
      <div className="space-y-6 flex flex-col lg:flex-row lg:flex-wrap lg:space-y-6">
        {portfoliodata
          .filter((item) => {
            return search.toLowerCase() === ''
              ? item
              : item.title.toLowerCase().includes(search) |
                  item.categories.toLowerCase().includes(search) |
                  item.tags.toLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <div
                id="fade-img"
                key={item.id}
                className="flex flex-col hide text-white text-center p-10 bg-accent_black lg:w-[425px] xl:w-[525px] 2xl:w-[400px] 3xl:w-[450px] 4xl:w-[525px] lg:mx-auto lg:mt-6"
              >
                <h1
                  id="drop-in-header"
                  className="hide font-mabry_probold text-2xl pb-5"
                >
                  {item.title}
                </h1>
                <img
                  id="fade-img"
                  src={item.img}
                  alt={item.alt}
                  className="hide pb-5"
                />
                <p
                  id="drop-in-text"
                  className="hide pb-10 text-xl font-pp_moriregular"
                >
                  {item.description}
                </p>
                <p
                  id="drop-in-header"
                  className="hide pb-5 text-xl font-pp_morisemibold"
                >
                  {item.categories}
                </p>
                <p
                  id="drop-in-text"
                  className="hide text-xl font-pp_morisemibold"
                >
                  {item.tags}
                </p>
                <ul className="flex flex-row mt-auto pt-20 font-pp_morisemibold text-2xl">
                  <li className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                    <a href={item.source} target="_blank">
                      SOURCE
                    </a>
                  </li>
                  <li className="ml-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                    <a href={item.live} target="_blank">
                      LIVE
                    </a>
                  </li>
                </ul>
                <p className="text-yellow-500 font-pp_morisemibold text-lg tracking-[2px] ml-auto mt-10">
                  {item.wip}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectCatalog;
