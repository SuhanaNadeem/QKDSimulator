import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Check from "../components/Check";
import HVBasis from "../components/HVBasis";
import LRBasis from "../components/LRBasis";
import AlicePolarizedPhoton from "./AlicePolarizedPhoton";
import BobPolarizedPhoton from "./BobPolarizedPhoton";
import EvePolarizedPhoton from "./EvePolarizedPhoton";
import UnpolarizedPhoton from "./UnpolarizedPhoton";
import Recon from "./Recon";

export default function Simulator({
  alicePhoton,
  finalMsgChange,
  withEve,
  undetectedNumChange,
  aliceBasis,
  bobBasis,
  showChecksAndEyes,
  bobPhoton,
  detectedNumChange,
}) {
  // var aliceBasis = Math.floor(Math.random() * 2);
  // var alicePhoton = Math.floor(Math.random() * 2);
  // var bobBasis = Math.floor(Math.random() * 2);
  // var bobPhoton = 0;
  var eveBasis = Math.floor(Math.random() * 2);
  var evePhoton = Math.floor(Math.random() * 2);
  console.log(alicePhoton);
  var secondaryBasis = 0;
  // var secondaryPhoton = 0;
  if (withEve) {
    if (aliceBasis === eveBasis) {
      evePhoton = alicePhoton;
    }

    if (bobBasis === eveBasis) {
      bobPhoton = evePhoton;
    }

    secondaryBasis = eveBasis;
    // secondaryPhoton = evePhoton;
  } else {
    if (bobBasis === aliceBasis) {
      bobPhoton = alicePhoton;
    }
    secondaryBasis = aliceBasis;
    // secondaryPhoton = alicePhoton;
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    // <div className="my-8 mx-auto w-32 md:max-w-2xl xl:max-w-6xl grid grid-flow-row items-center">
    <>
      <div className="p-4 py-4 text-xl font-thin text-gray-700 text-center cursor-pointer hover:animate-pulse hover:bg-gray-200 rounded-lg">
        {alicePhoton}
      </div>
      <div className="p-4 h-64 rounded-t-lg bg-gray-300 flex flex-col justify-center items-center relative  cursor-pointer hover:animate-pulse hover:bg-red-200 hover:border-red-600">
        <UnpolarizedPhoton withEve={withEve} />

        {/* <div className={`${aliceBasis === 0 ? "py-4" : ""} `}> */}
        <div className="absolute top-1/2">
          {aliceBasis === 0 ? <HVBasis /> : <LRBasis />}
        </div>
        <div className=" ">
          {/* absolute */}
          <AlicePolarizedPhoton
            aliceBasis={aliceBasis}
            alicePhoton={alicePhoton}
            withEve={withEve}
          />
        </div>
      </div>
      {withEve && (
        <div className="p-4 bg-gray-300 flex flex-col justify-center items-center cursor-pointer  hover:animate-pulse hover:bg-green-200 hover:border-green-600">
          <div className={`${eveBasis === 0 ? "py-4" : ""} `}>
            {eveBasis === 0 ? <HVBasis /> : <LRBasis />}
          </div>
          <EvePolarizedPhoton
            eveBasis={eveBasis}
            aliceBasis={aliceBasis}
            alicePhoton={alicePhoton}
            evePhoton={evePhoton}
          />
        </div>
      )}
      <div className="p-4 bg-gray-300 rounded-b-lg flex flex-col justify-center items-center  cursor-pointer  hover:animate-pulse hover:bg-blue-200 hover:border-blue-600">
        <div className={`${bobBasis === 0 ? "py-4" : ""} `}>
          {bobBasis === 0 ? <HVBasis /> : <LRBasis />}
        </div>
        <BobPolarizedPhoton
          bobBasis={bobBasis}
          bobPhoton={bobPhoton}
          secondaryBasis={secondaryBasis}
          withEve={withEve}
        />
      </div>
      {/* This is the check that both the basis and the polarization match for A and B */}
      {showChecksAndEyes ? (
        <Check
          bobBasis={bobBasis}
          aliceBasis={aliceBasis}
          alicePhoton={alicePhoton}
          bobPhoton={bobPhoton}
          finalMsgChange={finalMsgChange}
          withEve={withEve}
        />
      ) : (
        <div></div>
      )}

      {/* Where Eve was detected vs. not */}
      {withEve &&
        (showChecksAndEyes ? (
          <Recon
            bobBasis={bobBasis}
            aliceBasis={aliceBasis}
            alicePhoton={alicePhoton}
            bobPhoton={bobPhoton}
            undetectedNumChange={undetectedNumChange}
            detectedNumChange={detectedNumChange}
          />
        ) : (
          <div></div>
        ))}
    </>
  );
}
