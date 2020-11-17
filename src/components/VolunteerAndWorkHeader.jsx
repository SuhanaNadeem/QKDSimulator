import React from "react";
import headerImg from "../images/header.jpg";

export default function VolunteerAndWorkHeader() {
  return (
    <div>
      <img
        alt="Ocean header"
        src={headerImg}
        className="w-full h-64 object-cover"
      />
      <div className="flex justify-start items-start mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        <div className="leading-tight px-6">
          <h1 className="text-blue-600 pt-12 pb-4 text-4xl ">
            Volunteer and Work
          </h1>
          <h2 className="text-2xl pb-4 md:pb-8 font-thin">
            My volunteer and work experience exemplifies my passion for
            introducing STEM and critical-thinking in the youth of my community,
            and desire to further my own abilities to innovate for social good.
          </h2>
        </div>
      </div>
    </div>
  );
}
