import React from "react";
import headerImg from "../images/header.jpg";

export default function ActivitiesHeader() {
  return (
    <div>
      <img
        alt="Ocean header"
        src={headerImg}
        className="w-full h-64 object-cover"
      />
      <div className="flex justify-start items-start mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        <div className="leading-tight px-6">
          <h1 className="text-blue-600 pt-12 pb-4 text-4xl ">Activities</h1>
          <h2 className="text-2xl pb-4 md:pb-8 font-thin">
            A lot of my growth happens outside of class. I constantly seek out
            opportunities to apply what I'm learning in school to real-world
            challenges with like-minded individuals, and expand my breadth of
            knowledge in design-engineering, computer science, and emerging
            tech.
          </h2>
        </div>
      </div>
    </div>
  );
}
