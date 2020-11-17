import React from "react";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
export default function Check({
  bobBasis,
  aliceBasis,
  bobPhoton,
  alicePhoton,
  finalMsgChange,
  withEve,
}) {
  if (
    !withEve &&
    parseInt(bobBasis) === parseInt(aliceBasis) &&
    parseInt(bobPhoton) === parseInt(alicePhoton)
  ) {
    finalMsgChange(alicePhoton);
  }
  return (
    <div className="p-4 text-xl font-thin justify-center flex w-full text-center cursor-pointer rounded-lg hover:bg-gray-200 hover:animate-pulse">
      {parseInt(bobBasis) === parseInt(aliceBasis) &&
      parseInt(bobPhoton) === parseInt(alicePhoton) ? (
        <AiOutlineCheckCircle size={36} />
      ) : (
        <AiOutlineCloseCircle size={36} />
      )}
    </div>
  );
}
