import React, { useState } from 'react';
import ExternalLinkArrow from '../assets/icons/ExternalLinkArrow';
import emailjs from '@emailjs/browser';
import Download from '../assets/icons/download';

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    );
    e.target.reset();
  };

  const initialState = 'CONNECT';
  const [buttonText, setButtonText] = useState(initialState);
  const changeText = (text) => {
    setButtonText(text);
    setTimeout(() => setButtonText(initialState), [3500]);
  };

  return (
    <div className="bg-accent_black text-right text-white px-10 sm:px-16 py-24 xl:px-24 3xl:pr-24 5xl:px-64 lg:py-[175px] xl:py-[350px] 5xl:py-[500px]">
      <h2
        id="drop-in-header"
        className="hide text-2xl font-mabry_probold xs:text-3xl md:text-[37px] lg:text-6xl 2xl:text-7xl 5xl:text-8xl"
      >
        CONTACT
      </h2>
      <div className="flex flex-col xl:flex-row xl:pb-4 xl:pt-20">
        <div className="xl:pr-20">
          <p
            id="drop-in-text"
            className="hide font-pp_morisemibold py-4 xl:pt-0 text-md xs:text-xl md:text-2xl 2xl:text-3xl 5xl:text-5xl"
          >
            Tell me about your new idea/ website/ brand/ product/ opportunity
          </p>
          <div
            id="drop-in-header"
            className="hide flex flex-row mb-4 mt-1 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <a
              href="mailto:hello@ci-dominguez.com"
              className="ml-auto font-mabry_probold text-2xl xs:text-3xl md:text-[37px] lg:text-6xl 2xl:text-7xl 5xl:text-8xl"
            >
              EMAIL ME
            </a>
            <ExternalLinkArrow className="h-[16px] md:h-[24px] ml-1 mt-auto mb-2 md:mb-1 lg:h-[42px] lg:mb-2 3xl:h-[52px] 3xl:ml-3 5xl:h-[68px] 5xl:pl-3" />
          </div>
        </div>
        <form
          method="post"
          onSubmit={sendEmail}
          id="drop-in-text"
          className="hide flex flex-col py-4 xl:py-0 xl:w-3/4 xl:ml-auto"
        >
          <p className="font-pp_morisemibold pt-6 pb-4 text-md xl:pt-0 xs:text-xl md:text-2xl 2xl:text-3xl 5xl:text-5xl">
            ...or leave me a quick message!
          </p>
          <input
            type="text"
            name="name_from"
            placeholder="Name"
            className="placeholder-grey placeholder-opacity-50 tracking-[.75px] bg-transparent border-b-2 border-white xs:text-xl md:text-2xl text-white font-pp_morisemibold 5xl:text-4xl 5xl:mt-10 mb-6"
          />
          <input
            type="email"
            name="email_from"
            placeholder="Email"
            className="mt-6 placeholder-grey placeholder-opacity-50 tracking-[.75px] bg-transparent border-b-2 border-white xs:text-xl md:text-2xl text-white font-pp_morisemibold 5xl:text-4xl"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="placeholder-grey placeholder-opacity-50 tracking-[.75px] bg-transparent border-b-2 border-white mt-6 xs:text-xl md:text-2xl text-white font-pp_morisemibold 5xl:text-4xl"
          />
          <button
            type="submit"
            onClick={() => changeText('SENT!')}
            className="ml-auto font-pp_morisemibold text-black bg-white text-md xs:text-xl md:text-2xl py-2 px-8 mt-6 rounded-3xl tracking-[1px] 5xl:text-4xl 5xl:mt-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
          >
            {buttonText}
          </button>
          <p className="flex flex-row pt-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
            <a className="ml-auto text-right text-white font-pp_morisemibold text-lg xs:text-xl md:text-2xl 2xl:text-3xl 5xl:text-5xl">
              Take a look at my resume
            </a>
            <Download className="h-[16px] mt-1 pl-2 2xl:h-[24px] 5xl:h-[33px] 5xl:pl-3" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
