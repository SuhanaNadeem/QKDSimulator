import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function VolunteerAndWorkCard({
  volunteerAndWorkInfo: { title, description, image, date, link },
  index,
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      {index % 2 !== 0 && (
        <div
          data-aos="fade-left"
          className="md:flex-row-reverse mb-8 flex flex-col rounded-lg hover:shadow-lg shadow bg-white w-full h-full items-center justify-start py-8 px-6 md:p-6"
        >
          <div className="flex justify-center items-center">
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="uppercase tracking-wide text-blue-600 font-semibold text-md leading-snug w-full">
                  {title}
                </h2>
                <div className="md:pr-8 hover:opacity-75">
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
          <div className="md:flex-shrink-0">
            <img
              alt={title}
              className="rounded-lg md:w-56 mr-6 mt-6 md:mt-0"
              src={image}
            />
          </div>
        </div>
      )}
      {index % 2 === 0 && (
        <div
          data-aos="fade-right"
          className="mb-8 grid md:grid-cols-2 w-full h-full items-center justify-start bg-white flex-col rounded-lg hover:shadow-lg shadow h-full py-8 px-6 md:p-6"
        >
          <div className="mt-0 pr-8">
            <div className="flex items-center justify-between">
              <h2 className="uppercase tracking-wide text-blue-600 font-semibold text-md leading-snug w-full">
                {title}
              </h2>
              <div className="hover:opacity-75">
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
          <img
            alt={title}
            className="w-full h-64 md:h-full mt-4 md:mt-0 rounded-lg object-cover shadow-sm"
            src={image}
          />{" "}
        </div>
      )}
    </div>
  );
}
