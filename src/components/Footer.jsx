import React from "react";
import logoBlue from "../images/logoBlue.png";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  return (
    <div className="bg-white border-t-2 border-blue-600 flex items-center justify-center w-full">
      <nav className="transition duration-500 ease-in-out border-b-1 border-blue-600 py-8 px-8 md:px-0 flex items-center w-full justify-center md:max-w-2xl xl:max-w-5xl">
        <button
          className="focus:outline-none"
          onClick={(e) => history.push("/")}
        >
          <img
            alt="SN Logo"
            className="opacity-50 h-4 md:h-6 flex-shrink-0"
            src={logoBlue}
          />
        </button>
        <p className="ml-10 leading-none text-sm">
          Developed by Suhana Nadeem &#169;
        </p>
      </nav>
    </div>
  );
}
