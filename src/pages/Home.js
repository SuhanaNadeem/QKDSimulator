import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import headerImg1 from "../images/1.jpg";
import headerImg2 from "../images/2.jpg";
import headerImg3 from "../images/3.jpg";
import headerImg4 from "../images/4.jpg";
import profile from "../images/profile.jpg";
import link from "../images/1.jpg";
import Typical from "react-typical";
import { TweenMax, Power3 } from "gsap";
import Aos from "aos";
import "aos/dist/aos.css";
import BackgroundSlider from "react-background-slider";

import {
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Footer from "../components/Footer";

export default function Home() {
  var textItem = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    console.log(textItem);
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  }, []);
  return (
    <div>
      <NavBar />

      <div className="bg-cover max-h-screen h-full object-top bg-no-repeat w-full min-h-screen ">
        <BackgroundSlider
          images={[headerImg1, headerImg2, headerImg3, headerImg4]}
          duration={10}
          transition={1}
        />
        <div className=" pt-40 mx-auto px-8 md:px-0 flex items-center w-full justify-between md:max-w-2xl xl:max-w-5xl">
          <p
            ref={(el) => {
              textItem = el;
            }}
            className="text-6xl font-thin text-white leading-snug"
          >
            Hi, I'm{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Suhana Nadeem",
                2000,
                "a developer",
                1000,
                "a student",
                1000,
                "an innovator",
                1000,
                "a robotics-enthusiast",
                1000,
              ]}
            />
          </p>
        </div>
      </div>
      <div className="md:max-w-2xl mx-auto xl:max-w-5xl py-32 px-2 md:px-0">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              data-aos="fade-right"
              className="rounded-lg shadow-md hover:shadow-lg h-full object-cover"
              src={profile}
              width="448"
              height="299"
              alt="Profile"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <div
              data-aos="fade-right"
              className="mt-4 h-full flex-1 w-full md:mt-0 md:ml-6 bg-white rounded-lg md:p-6 p-4 shadow-lg leading-snug"
            >
              <p className="text-blue-600 text-4xl mb-4">Hey there! </p>
              <p className="break-words text-xl font-light ">
                My name is Suhana Nadeem and I’m a Grade 12 student from
                Mississauga, Ontario. As a developer and innovator, my goal is
                to use Software Engineering to solve global challenges that
                impact billions of people. Along with programming, I’m
                passionate about using Design-Engineering, Robotics, Quantum
                Computing, and Artificial Intelligence for social good.
              </p>

              <div className="flex-col mt-4 md:flex-row flex items-center justify-between">
                <p className="text-blue-600  italic text-lg pr-8">
                  Want to reach out? Drop me an email at
                  suhana.nadeemv@gmail.com.
                </p>
                <div className="flex mt-4 md:mt-0 items-center justify-center">
                  <div className="pr-6 hover:opacity-75">
                    <a
                      className="last:mr-0 hover:opacity-75"
                      href="https://twitter.com/SuhanaNadeem"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillTwitterCircle size={32} />
                    </a>
                  </div>
                  <div className="pr-6 hover:opacity-75">
                    <a
                      className="last:mr-0 hover:opacity-75"
                      href="https://www.youtube.com/channel/UCnHwh6zWd9Fvw67kxPBBxYQ/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillYoutube size={32} />
                    </a>
                  </div>
                  <div className="pr-6 hover:opacity-75">
                    {link && (
                      <a
                        className="last:mr-0 hover:opacity-75"
                        href="https://github.com/SuhanaNadeem"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillGithub size={32} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
