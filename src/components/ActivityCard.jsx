import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function ActivityCard({
  activityInfo: { title, description, image, date, link },
  index,
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className={`${
        index % 3 === 0 ? "md:flex-row md:justify-start md:col-span-2" : ""
      } flex flex-col-reverse justify-end items-center rounded-lg hover:shadow-lg shadow bg-white w-full h-full py-8 px-6 md:p-6`}
    >
      <img
        alt={title}
        className={`${
          index % 3 === 0
            ? "md:w-56 md:mt-0 md:mr-6 object-contain"
            : "h-64 object-cover "
        } w-full mt-6 flex-shrink-0 rounded-lg`}
        src={image}
      />

      <div className="flex flex-1 justify-center items-center">
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="uppercase tracking-wide text-blue-600 font-semibold text-md leading-snug w-full">
              {title}
            </h2>
            <div className="md:pr-6 hover:opacity-75">
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
    </div>
  );
}
