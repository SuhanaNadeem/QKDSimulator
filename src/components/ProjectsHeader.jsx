import React from "react";
import headerImg from "../images/header.jpg";

export default function ProjectsHeader() {
  return (
    <div>
      <img
        alt="Ocean header"
        src={headerImg}
        className="w-full h-64 object-cover"
      />

      <div className="flex justify-start items-start mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        <div className="leading-tight px-6">
          <h1 className="text-blue-600 pt-16 pb-4 text-4xl ">
            I develop software projects that push the boundaries of my abilities
            and have a meaningful impact.
          </h1>
          <h2 className="text-2xl pb-16 font-thin">
            Proficiences: Python, Java, JavaScript, HTML/CSS, React, Dart,
            Tensorflow, MongoDB, Node.js, Firebase, Amazon Alexa Development,
            and Android Development with Flutter.
          </h2>
        </div>
      </div>
    </div>
  );
}
