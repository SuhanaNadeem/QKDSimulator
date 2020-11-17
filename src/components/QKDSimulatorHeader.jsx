import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import headerImg from "../images/quantum3.jpeg";
import sideImg from "../images/0.png";

export default function QKDSimulatorHeader() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <img
        alt="QKD header"
        src={headerImg}
        className="w-full h-64 object-cover"
      />
      <div className="flex justify-start items-start mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        <div className="leading-tight px-6">
          <h1 className="text-blue-600 pt-12 pb-4 text-4xl ">
            Quantum Key Distribution Simulator
          </h1>
          <div className="md:inline-flex  flex-col md:flex-row my-6">
            <div className="pb-4 md:pb-8 text-lg">
              <p className="font-thin mb-2 text-blue-600">
                This simulator demonstrates QKD as outlined by the BB84
                Protocol.
              </p>
              <h2 className="font-thin">
                You can simulate the key generation process that would occur
                over a secure quantum channel by disabling the eavesdropper,
                Eve.
              </h2>
              <h2 className="font-thin mt-2">
                Enable Eve to learn how two communicators, Alice and Bob, would
                detect an eavesdropper who is using the send-intercept strategy.{" "}
              </h2>
            </div>
            <div className="mt-4 md:mt-0 md:h-full w-full md:w-64 rounded-lg md:ml-4 h-64">
              <img
                alt="Encryption"
                src={sideImg}
                data-aos="fade-left"
                className="object-contain md:object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
