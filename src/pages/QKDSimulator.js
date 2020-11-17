import React, { useState } from "react";
import Footer from "../components/Footer";
import QKDSimulatorHeader from "../components/QKDSimulatorHeader";
import Simulator from "../components/Simulator";
import { CgEnter } from "react-icons/cg";
import { GiSpy } from "react-icons/gi";
import aliceImg from "../images/alice.png";
import bobImg from "../images/bob.png";
import eveImg from "../images/eve1.png";
//testing

export default function QKDSimulator() {
  const [tempAliceMsg, setTempAliceMsg] = useState("");
  // const [aliceMsg, setAliceMsg] = useState("");
  const [tempAliceBits, setTempAliceBits] = useState([]);
  const [aliceBits, setAliceBits] = useState([]);
  const [aliceBases, setAliceBases] = useState([]);
  const [bobBases, setBobBases] = useState([]);

  // const [reconNum, setReconNum] = useState(1);
  const [tempReconNum, setTempReconNum] = useState(1);
  const [key, setKey] = useState("");
  const [withEve, setWithEve] = useState(false);
  const [tempWithEve, setTempWithEve] = useState(false);
  // const [tempUndetected, setTempUndetected] = useState(0);
  const [undetected, setUndetected] = useState(0);
  // const [tempDetected, setTempDetected] = useState(0);
  const [detected, setDetected] = useState(0);

  const [randCols, setRandCols] = useState([0]);

  const [submitted, setSubmitted] = useState(false);

  var finalMsg = "";
  var undetectedNum = 0;
  var detectedNum = 0;
  //alicePhotons = aliceBits!!

  var bobPhoton = 0;

  var gridStyle = "";
  function getGridStyle() {
    if (withEve) {
      gridStyle = "auto auto auto auto auto auto";
    } else {
      gridStyle = "auto auto auto auto";
    }
    return gridStyle;
  }

  function aliceMsgChange(e) {
    e.preventDefault();
    e.stopPropagation();
    setKey("");
    setUndetected(0);
    setDetected(0);

    var bobBasesTemp = [];
    var aliceBasesTemp = [];

    // setReconNum(tempReconNum);
    // setAliceMsg(tempAliceMsg);
    setAliceBits(tempAliceBits);
    setWithEve(tempWithEve);

    for (var i = 0; i < tempAliceBits.length; i++) {
      bobBasesTemp.push(Math.floor(Math.random() * 2));
      aliceBasesTemp.push(Math.floor(Math.random() * 2));
    }
    setBobBases(bobBasesTemp);
    setAliceBases(aliceBasesTemp);
  }

  function finalMsgChange(letter) {
    finalMsg += letter;
    setKey(finalMsg);
  }

  function undetectedNumChange(num) {
    undetectedNum += num;
    setUndetected(undetectedNum);
  }
  function detectedNumChange(num) {
    detectedNum += num;
    setDetected(detectedNum);
  }

  function reconChange(e) {
    e.preventDefault();
    e.stopPropagation();

    var tempRandCols = [];
    // setReconNum(tempReconNum);
    console.log(tempReconNum);
    while (tempRandCols.length < tempReconNum) {
      console.log("temp alice bits length: " + tempAliceBits.length);
      var r = Math.floor(Math.random() * tempAliceBits.length);
      if (tempRandCols.indexOf(r) === -1) {
        tempRandCols.push(r);
      }
    }
    setRandCols(tempRandCols);
  }

  function updateTempAliceMsg(e) {
    e.preventDefault();
    e.stopPropagation();
    setKey("");
    // setTempUndetected(0);
    // setTempDetected(0);

    const targetValue = e.target.value;
    // check if not 0 1
    if (targetValue % 10 <= 1 && targetValue >= 0) {
      setTempAliceMsg(targetValue);

      setTempAliceBits(targetValue.split(""));
    }
  }

  function updateTempReconNum(e) {
    e.preventDefault();
    e.stopPropagation();

    var numOfRecon = e.target.value;
    if (numOfRecon <= tempAliceBits.length && numOfRecon >= 1) {
      setTempReconNum(numOfRecon);
    }
  }

  return (
    <div>
      <QKDSimulatorHeader />
      <form
        onSubmit={(e) => {
          aliceMsgChange(e);
          reconChange(e);
          setSubmitted(true);
        }}
      >
        <div className="flex flex-col justify-start mt-4 md:mt-0 px-6 md:flex-row md:justify-center items-center mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
          <button
            className={`${
              tempWithEve
                ? "bg-blue-600 text-white border-blue-600 hover:bg-white hover:text-blue-600"
                : "bg-transparent text-blue-600  hover:bg-blue-600 hover:text-white border-blue-600"
            } inline-flex focus:outline-none  items-center justify-start md:justify-center font-normal py-2 px-2 mx-16 border-2 rounded`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setTempWithEve(!tempWithEve);
            }}
          >
            <span>{`${tempWithEve ? "Disable" : "Enable"} Eve`}</span>
            <GiSpy className="fill-current w-4 h-4 ml-2" size={16} />
          </button>

          <button
            type="submit"
            className=" focus:outline-none inline-flex items-center mt-4 md:mt-0 bg-transparent hover:bg-blue-600 border-1 text-blue-600 font-normal hover:text-white py-2 px-2 mx-16 border-2 border-blue-600 hover:border-transparent rounded"
          >
            <span>Submit</span>
            <CgEnter className="fill-current w-4 h-4 ml-2" size={16} />
          </button>
        </div>
        <div className="flex my-8 flex-col px-6 md:flex-row justify-start items-start mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
          <div className="mb-4 md:mb-8 md:mr-10 leading-tight items-center flex flex-row w-full">
            <h2 className="w-1/3 text-xl font-thin">Alice's Message</h2>

            <input
              className="w-2/3 text-gray-800 font-thin p-2 leading-tight focus:outline-none border-b-2 border-blue-600 focus:border-blue-800"
              type="number"
              onChange={updateTempAliceMsg}
              placeholder="Binary String"
              aria-label="Alice's Message"
              value={tempAliceMsg}
              min={0}
            />
          </div>
          <div className="leading-tight items-center flex flex-row w-full ">
            <h2 className="w-1/3 text-xl font-thin"># of Recon. Qubits</h2>

            <input
              className="w-2/3 text-gray-800 font-thin p-2 leading-tight focus:outline-none border-b-2 border-blue-600 focus:border-blue-800"
              type="number"
              onChange={updateTempReconNum}
              max={tempAliceBits.length}
              min={0}
              value={tempReconNum}
              placeholder={"<= " + tempAliceBits.length}
              aria-label="Recon. Bits"
            />
          </div>
        </div>
      </form>

      {submitted && (
        <div
          className={`mb-4 grid gap-1 w-auto grid-flow-col lg:max-w-2xl xl:max-w-5xl mx-auto overflow-x-auto`}
          style={{
            gridTemplateRows: `${getGridStyle()} `,
            gridAutoColumns: "min-content",
          }}
        >
          <div className="  text-lg text-center font-thin flex items-center h-full justify-center">
            Qubits
          </div>
          <div className="bg-red-700 text-white rounded-lg flex-col text-lg  text-center font-thin flex items-center h-full justify-center h-72">
            <p>Alice</p>
            <img alt="Communicators" src={aliceImg} className="h-16"></img>
          </div>
          {withEve && (
            <div className="bg-green-700 text-white rounded-lg flex-col text-lg text-center font-thin flex items-center h-full justify-center h-72">
              <p>Eve</p>
              <img alt="Communicators" src={eveImg} className="h-16"></img>
            </div>
          )}
          <div className="bg-blue-700 text-white rounded-lg flex-col text-lg text-center font-thin flex items-center h-full justify-center h-72">
            <p>Bob</p>
            <img alt="Communicators" src={bobImg} className="h-16"></img>
          </div>
          <div className="text-lg text-center font-thin flex items-center h-full justify-center">
            Matched Qubits
          </div>
          {withEve && (
            <div className="pb-4 text-lg text-center font-thin flex items-center h-full justify-center">
              Eve Detection
            </div>
          )}
          {aliceBits.map((aliceBit, i) => (
            <Simulator
              key={i}
              showChecksAndEyes={randCols.includes(i) ? true : false}
              withEve={withEve}
              alicePhoton={aliceBit} // equal to alicePhoton!!
              aliceBasis={aliceBases[i]}
              bobBasis={bobBases[i]}
              bobPhoton={bobPhoton}
              finalMsgChange={finalMsgChange}
              undetectedNumChange={undetectedNumChange}
              detectedNumChange={detectedNumChange}
            />
          ))}
        </div>
      )}

      <div className="flex justify-start items-start mx-auto md:px-0 w-full md:max-w-2xl xl:max-w-6xl">
        <div className="leading-tight px-6">
          {!withEve && submitted && key && (
            <h2 className="text-xl my-4 pb-4 md:pb-8 font-thin">
              Key Generated: {key}
            </h2>
          )}

          {withEve && submitted && (
            <div>
              <h2 className="text-xl mt-8 pb-8 font-thin">
                Number of Times Eve Was Detected: {detected}
              </h2>
              <h2 className="text-xl pb-8 font-thin">
                Number of Times Eve Was Undetected: {undetected}
              </h2>
            </div>
          )}
          {withEve && submitted && undetected + detected !== 0 && (
            <h2 className="text-xl pb-6 md:pb-10 font-thin">
              Alice and Bob Caught Eve With{" "}
              {Math.floor((detected / (undetected + detected)) * 100)}% Accuracy
            </h2>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
