import React from "react";
import headerImg from "../images/header.jpg";

export default function AwardsHeader({ element }) {
  return (
    <div>
      <img
        alt="Ocean header"
        src={headerImg}
        className="w-full h-64 object-cover"
      />
      <div className="flex justify-start items-start mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        <div className="leading-tight px-6">
          <h1 ref={element} className="text-blue-600 pt-12 pb-4 text-4xl ">
            Awards
          </h1>
          <h2 className="text-2xl pb-4 md:pb-8 font-thin">
            I've been presented with various distinctions for my academic and
            extracurricular achievements over the past few years. These awards
            aren't the reason I work hard, but I'm proud to be recognized by
            them all the same.
          </h2>
        </div>
      </div>
    </div>
  );
}
