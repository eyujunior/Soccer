import React from "react";
const Hero = () => {
  return (
    <div className="bg-cover bg-hero">
      <div className="h-screen layout text-white relative py-4 z-10">
        <div className=" absolute top-1/3">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl xl:leading-tight font-semibold xl:w-1/2 w-11/12 sm:w-4/5 mx-auto md:mx-0 text-center md:text-left capitalize leading-snug mb-8 xl:mb-6">
            your source of information on the top two soccer leagues
          </h1>
          <a href="#howto">
            <button className="bg-red-500 py-3 px-8 text-lg text-white flex items-center justify-center md:justify-between gap-4 w-max mx-auto md:mx-0 rounded-md">
              How to
              <svg className=" w-4 h-4 fill-white" viewBox="0 0 448 512">
                <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
