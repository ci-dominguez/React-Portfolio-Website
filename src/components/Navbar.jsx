import React, { useState } from 'react';
import { Link, NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Personal from '../pages/Personal';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Error from '../pages/Error';
import Logo from '../assets/icons/Logo';
import MobileOpen from '../assets/icons/MobileOpen';
import MobileClose from '../assets/icons/MobileClose';
import Go from '../assets/icons/Go';

const Navbar = () => {
  const [buttonText, setButtonText] = useState('ESPAÑOL');
  const changeText = (text) => setButtonText(text);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    let ele = document.getElementById('mobile_nav');
    ele.classList.add('hidden');
  };

  const handleMobileNav = () => {
    handleClick();
    let ele = document.getElementById('mobile_nav');
    ele.classList.toggle('hidden');
  };

  return (
    <BrowserRouter>
      <nav id="nav_wrap" className="bg-white">
        <div className="px-10 pt-16 sm:px-16 lg:flex lg:flex-row xl:px-24 5xl:px-64 5xl:pt-28">
          <div className="flex flex-row">
            <div className="flex">
              <Link to="/" onClick={closeMobileMenu}>
                <Logo className="h-[19px] sm:h-[25px] lg:h-[18px] 3xl:h-[22px] 4xl:h-[26px] 5xl:h-[35px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300" />
              </Link>
            </div>
            <div className="flex ml-auto lg:hidden" onClick={handleMobileNav}>
              {click ? (
                <MobileClose className="h-[19px] sm:h-[25px]" />
              ) : (
                <MobileOpen className="h-[19px] sm:h-[25px]" />
              )}
            </div>
          </div>

          <ul
            id="mobile_nav"
            className="hidden font-mabry_problack text-black text-[32px] lg:leading-none text-right flex flex-col mt-6 lg:mt-0 lg:text-xl lg:flex lg:flex-row lg:ml-auto 3xl:text-2xl 3xl:leading-none lg:space-x-16 xl:space-x-24 2xl:space-x-36 4xl:space-x-48 5xl:text-3xl"
          >
            <li className="drop-in-header mb-4 lg:mb-0 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <NavLink
                to="portfolio"
                className={({ isActive }) =>
                  isActive
                    ? ' border-l-4 pl-2 border-black lg:border-l-0 lg:border-b-4 lg:pl-0'
                    : ''
                }
                onClick={closeMobileMenu}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="drop-in-header mb-4 lg:mb-0 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <NavLink
                to="personal"
                className={({ isActive }) =>
                  isActive
                    ? ' border-l-4 pl-2 border-black lg:border-l-0 lg:border-b-4 lg:pl-0'
                    : ''
                }
                onClick={closeMobileMenu}
              >
                PERSONAL
              </NavLink>
            </li>
            <li className="drop-in-header mb-4 lg:mb-0 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? ' border-l-4 pl-2 border-black lg:border-l-0 lg:border-b-4 lg:pl-0'
                    : ''
                }
                onClick={closeMobileMenu}
              >
                CONTACT
              </NavLink>
            </li>
            <li className="drop-in-header mb-4 lg:mb-0 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
              <NavLink
                to="blog"
                className={({ isActive }) =>
                  isActive
                    ? ' border-l-4 pl-2 border-black lg:border-l-0 lg:border-b-4 lg:pl-0'
                    : ''
                }
                onClick={closeMobileMenu}
              >
                BLOG
              </NavLink>
            </li>
            <li className="drop-in-text ml-auto pb-4 text-[24px] lg:text-xl flex flex-row lg:leading-none 3xl:text-2xl 3xl:leading-none text-black 5xl:text-3xl">
              <button onClick={() => changeText('ENGLISH')}>
                {buttonText}
              </button>
              <div className="flex flex-col">
                (WIP)
                {/* <div className="flex mb-auto"></div>
                <Go className="h-[14px] 4xl:h-[20px] 5xl:h-[27px] 5xl:ml-2" />
                <div className="flex mt-auto"></div> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navbar;
