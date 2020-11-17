import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function NavBarDropdown({ pageLinksAndTitle }) {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="block md:hidden">
      <button onClick={toggleIsOpen} className="">
        <MdMenu color="black" size={32} />
      </button>
      {isOpen && (
        // TODO fix the bg color of this
        <div className="absolute inset-0 min-h-screen w-full h-full bg-white text-blue-600">
          <div className="flex flex-col items-center px-8 py-4 justify-center">
            <button
              onClick={toggleIsOpen}
              className="inline-flex items-end justify-end w-full"
            >
              <MdClose color="black" size={32} />
            </button>
            <div className="flex-col max-w-sm items-start justify-start flex mt-10 text-2xl ">
              {pageLinksAndTitle.map((pageInfo) => (
                <button
                  key={pageInfo.title}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(pageInfo.link);
                  }}
                  className="font-thin mb-4 last:mb-0"
                >
                  {pageInfo.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
