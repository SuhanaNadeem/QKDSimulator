import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export default function Recon({
  bobBasis,
  aliceBasis,
  bobPhoton,
  alicePhoton,
  undetectedNumChange,
  detectedNumChange,
}) {
  if (
    parseInt(bobBasis) === parseInt(aliceBasis) &&
    parseInt(bobPhoton) === parseInt(alicePhoton)
  ) {
    undetectedNumChange(1);
  }
  if (
    parseInt(bobBasis) === parseInt(aliceBasis) &&
    parseInt(bobPhoton) !== parseInt(alicePhoton)
  ) {
    detectedNumChange(1);
  }

  return (
    <div className="p-4 text-xl font-thin justify-center flex w-full text-center rounded-lg  cursor-pointer hover:bg-gray-200 hover:animate-pulse">
      {/* Detected = open eye THINK being watched (detected) if bases match but polarizations don't */}
      {parseInt(bobBasis) === parseInt(aliceBasis) &&
        parseInt(bobPhoton) !== parseInt(alicePhoton) && (
          <AiFillEye size={36} />
        )}
      {
        /* Undetected = closed eye THINK not being watched (undetected) if both bases and polarizations match */
        parseInt(bobBasis) === parseInt(aliceBasis) &&
          parseInt(bobPhoton) === parseInt(alicePhoton) && (
            <AiFillEyeInvisible size={36} />
          )
      }
    </div>
  );
}
