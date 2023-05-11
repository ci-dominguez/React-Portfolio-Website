import React, { useState } from 'react';

const ExpertiseCards = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleCat = (index) => {
    setToggleState(index);
  };
  return (
    <div className="text-right text-black font-mabry_probold mt-24 bg-white xl:py-[350px] 5xl:py-[350px]">
      <h2
        id="drop-in-header"
        className="hide px-10 sm:px-16 xl:px-24 text-2xl xs:text-3xl md:text-[37px] lg:text-6xl 2xl:text-7xl 5xl:px-64 5xl:text-8xl"
      >
        MY EXPERTISE
      </h2>
      <div className="mt-8 lg:flex lg:flex-row xl:px-24 5xl:px-64">
        <div className="px-10 sm:px-16 xl:px-0 xl:ml-auto xl:mt-0">
          <ul className="text-xl xs:text-2xl sm:flex sm:flex-row md:text-3xl lg:flex-col xl:text-4xl 3xl:text-6xl space-y-2 sm:space-y-0 lg:space-y-2 3xl:space-y-6 5xl:space-y-12 5xl:text-7xl">
            <div className="sm:ml-auto xl:ml-0 space-y-2 3xl:space-y-6 5xl:space-y-12">
              <li className="hide" id="drop-in-text">
                <button
                  className={
                    toggleState === 1
                      ? 'transition ease-in-out delay-50 bg-black text-white xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                      : 'transition ease-in-out delay-50 bg-white text-black xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                  }
                  onClick={() => toggleCat(1)}
                >
                  WEB DEVELOPMENT
                </button>
              </li>
              <li className="hide" id="drop-in-text">
                <button
                  className={
                    toggleState === 2
                      ? 'transition ease-in-out delay-50 bg-black text-white xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                      : 'transition ease-in-out delay-50 bg-white text-black xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                  }
                  onClick={() => toggleCat(2)}
                >
                  GRAPHIC DESIGN
                </button>
              </li>
            </div>
            <div className="sm:ml-4 xl:ml-0 space-y-2 3xl:space-y-6 5xl:space-y-12">
              <li className="hide" id="drop-in-text">
                <button
                  className={
                    toggleState === 3
                      ? 'transition ease-in-out delay-50 bg-black text-white xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                      : 'transition ease-in-out delay-50 bg-white text-black xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                  }
                  onClick={() => toggleCat(3)}
                >
                  UX/UI DESIGN
                </button>
              </li>
              <li className="hide" id="drop-in-text">
                <button
                  className={
                    toggleState === 4
                      ? 'transition ease-in-out delay-50 bg-black text-white xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                      : 'transition ease-in-out delay-50 bg-white text-black xl:mt-3 px-1 hover:-translate-y-1 hover:scale-110 duration-300'
                  }
                  onClick={() => toggleCat(4)}
                >
                  MULTIMEDIA
                </button>
              </li>
            </div>
          </ul>
        </div>
        {/* End List */}
        <div
          id="fade-img"
          className={
            toggleState === 1
              ? 'show bg-accent_black mx-10 sm:mx-16 xl:mr-0 py-14 text-white mt-8 lg:w-1/2 lg:ml-auto lg:mt-0'
              : 'hidden hide'
          }
        >
          <div className="px-10">
            <h2
              id="drop-in-header"
              className="hide mb-4 text-2xl xs:text-3xl 3xl:text-4xl"
            >
              FRONT-END
            </h2>
            <p
              id="drop-in-text"
              className="hide text-lg xs:text-2xl 3xl:text-3xl"
            >
              <span>HTML5,</span> <span className="text-grey">CSS3,</span>{' '}
              <span>JAVASCRIPT,</span>{' '}
              <span className="text-grey">TYPESCRIPT,</span>{' '}
              <span>TAILWIND,</span>{' '}
              <span className="text-grey">BOOTSTRAP5,</span>{' '}
              <span>REACT18, </span> <span className="text-grey">ANGULAR,</span>{' '}
              <span>WORDPRESS,</span> <span className="text-grey">JQUERY</span>{' '}
              <span>SCSS</span>
            </p>
            <h2
              id="drop-in-header"
              className="hide mt-10 mb-4 text-2xl xs:text-3xl 3xl:text-4xl"
            >
              BACK-END
            </h2>
            <p
              id="drop-in-text"
              className="hide text-lg xs:text-2xl 3xl:text-3xl"
            >
              <span>PHP8,</span> <span className="text-grey">SQL,</span>{' '}
              <span>MONGODB,</span> <span className="text-grey">NODE.JS,</span>{' '}
              <span>EXPRESS,</span> <span className="text-grey">JAVA,</span>{' '}
              <span>PYTHON,</span> <span className="text-grey">FLASK</span>{' '}
            </p>
            <h2
              id="drop-in-header"
              className="hide mt-10 mb-4 text-2xl xs:text-3xl 3xl:text-4xl"
            >
              FULL-STACK
            </h2>
            <p
              id="drop-in-text"
              className="hide text-lg xs:text-2xl 3xl:text-3xl"
            >
              <span>MERN,</span> <span className="text-grey">MEAN,</span>{' '}
              <span>NEXTJS13</span>
            </p>
            <p
              id="drop-in-text"
              className="hide mt-10 font-pp_morisemibold text-lg xs:text-xl 3xl:text-2xl"
            >
              My practice takes advantage of the multiple disciplines under my
              belt to build one of a kind websites. All of which are built with
              an intuitive mobile first approach while following ADA compliance,
              WCAG 2.0AA, as well as perfecting SEO capabilities and
              performance.
            </p>
          </div>
        </div>{' '}
        {/*End Web*/}
        <div
          id="fade-img"
          className={
            toggleState === 2
              ? 'show bg-accent_black mx-10 sm:mx-16 xl:mr-0 py-14 text-white mt-8 lg:w-1/2 lg:ml-auto lg:mt-0'
              : 'hidden hide'
          }
        >
          <div className="px-10">
            <h2
              id="drop-in-header"
              className="hide mb-4 text-2xl xs:text-3xl 3xl:text-4xl"
            >
              SERVICES
            </h2>
            <p
              id="drop-in-text"
              className="hide text-lg xs:text-2xl 3xl:text-3xl"
            >
              <span>GENERAL GRAPHIC DESIGN,</span>{' '}
              <span className="text-grey">LAYOUT,</span>{' '}
              <span>LOGO DESIGN,</span>{' '}
              <span className="text-grey">VISUAL IDENTITY,</span>{' '}
              <span>CORPORATE IDENTITY,</span>{' '}
              <span className="text-grey">BRANDING & PACKAGING,</span>{' '}
              <span>TYPOGRAPHY,</span>{' '}
              <span className="text-grey">ILLUSTRATION,</span>{' '}
              <span>VISUAL DESIGN</span>{' '}
            </p>
            <p
              id="drop-in-text"
              className="hide mt-10 font-pp_morisemibold text-lg xs:text-xl 3xl:text-2xl"
            >
              My emphasis on asymmetry allows me to create unusual yet authentic
              compositions. All aspects of my work is intentional and chosen
              with care in order to create balanced yet living work. Keeping up
              with trends is vital in this environment but where most people
              would stop, I innovate off of the standard. That's why I like to
              think of myself as a future-facing Graphic Designer.
            </p>
          </div>
        </div>
        {/*End Graphic design*/}
        <div
          id="fade-img"
          className={
            toggleState === 3
              ? 'show bg-accent_black mx-10 sm:mx-16 xl:mr-0 py-14 text-white mt-8 lg:w-1/2 lg:ml-auto lg:mt-0'
              : 'hidden hide'
          }
        >
          <div className="px-10">
            <h2
              id="drop-in-header"
              className="hide mb-4 text-2xl xs:text-3xl 3xl:text-4xl"
            >
              UX SKILLS / GENERAL SKILLSET
            </h2>
            <p
              id="drop-in-text"
              className="hide text-lg xs:text-2xl 3xl:text-3xl"
            >
              <span>WIREFRAMMING,</span>{' '}
              <span className="text-grey">PROTOTYPING,</span>{' '}
              <span>USER FLOW,</span>{' '}
              <span className="text-grey">VISUAL DESIGN,</span>{' '}
              <span>USER RESEARCH,</span>{' '}
              <span className="text-grey">USABILITY TESTING,</span>{' '}
              <span>AGILE,</span>{' '}
              <span className="text-grey">COLLABORATION,</span>{' '}
              <span>COMMUNICATION,</span>{' '}
              <span className="text-grey">TIME MANGAGEMENT,</span>{' '}
              <span>VISUAL DESIGN,</span>{' '}
              <span className="text-grey">ILLUSTRATION,</span>{' '}
              <span>VISUAL DESIGN</span>{' '}
            </p>
            <p
              id="drop-in-text"
              className="hide mt-10 font-pp_morisemibold text-lg xs:text-xl 3xl:text-2xl"
            >
              As a UX/UI Designer I don't let my personal bias cloud my
              judgement. I take a statistical research approach before applying
              my connections to emotion, imagination, empathy, and sensitivity.
            </p>
          </div>
        </div>
        {/*End UX*/}
        <div
          id="fade-img"
          className={
            toggleState === 4
              ? 'show bg-accent_black mx-10 sm:mx-16 xl:mr-0 py-14 text-white mt-8 lg:w-1/2 lg:ml-auto lg:mt-0'
              : 'hidden hide'
          }
        >
          <div className="px-10">
            <h2
              id="drop-in-header"
              className="hide mb-4 text-2xl xs:text-3xl 3xl:text-4xl"
            >
              DIGITAL MULTIMEDIA SKILLSET
            </h2>
            <p
              id="drop-in-text"
              className="hide text-lg xs:text-2xl 3xl:text-3xl"
            >
              <span>INTERMEDIATE GAME DEVELOPMENT,</span>{' '}
              <span className="text-grey">UNITY C#,</span>{' '}
              <span>UNREAL C++,</span>{' '}
              <span className="text-grey">3D MODELING,</span>{' '}
              <span>3D ANIMATION,</span>{' '}
              <span className="text-grey">2D ART AND ILLUSTRATION,</span>{' '}
              <span>2D DESIGN,</span>{' '}
              <span className="text-grey">3D DESIGN,</span>{' '}
              <span>DIGITAL VIDEO</span>{' '}
            </p>
            <p
              id="drop-in-text"
              className="hide mt-10 font-pp_morisemibold text-lg xs:text-xl 3xl:text-2xl"
            >
              My entire life has been about multimedia. You could say it started
              with programming mods and scripting for games like Minecraft and
              Roblox when I was in middle school. From there I generally
              attempted everything that seemed interesting to me.
            </p>
          </div>
        </div>
        {/*End Multimedia*/}
      </div>
    </div>
  );
};

export default ExpertiseCards;
