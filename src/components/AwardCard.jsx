import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function AwardCard({
  awardInfo: { title, description, image, date, link },
  index,
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className={`${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } overflow-hidden flex flex-col md:flex-row rounded-lg hover:shadow-lg shadow bg-white w-full h-full items-center justify-start py-8 px-6 md:p-6 `}
    >
      <div className="flex flex-1 justify-start items-center w-full">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h2 className="uppercase tracking-wide text-blue-600 font-semibold text-md leading-snug w-full">
              {title}
            </h2>
            <div className="pr-8 hover:opacity-75">
              {link && (
                <a
                  className="last:mr-0 hover:opacity-75"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
          <h3 className="tracking-wide mt-1 mb-4 italic text-md font-light">
            {date}
          </h3>
          <p className="font-thin text-lg">{description}</p>
        </div>
      </div>

      <img
        alt={title}
        className={`${
          index % 2 === 0 ? "md:mr-4" : "md:ml-4"
        } mt-4 md:mt-0 h-64 md:h-full w-full md:w-64 rounded-lg object-cover`}
        src={image}
      />
    </div>
  );
}
