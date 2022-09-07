import React from "react";
import logo from "../media/logo.png";
import Button from "./Button";
import Socials from "./Socials";

function Hero({ setPage }) {
  return (
    <div className=" bg-[#2f3340] h-fit w-[80vw] lg:h-fit lg:w-[37vw] rounded-3xl shadow-xl flex flex-col items-center p-5 lg:pb-9 space-y-4">
      <div className=" p-3 bg-[#3E4352] rounded-full shadow-lg mt-2">
        <div className=" p-2 rounded-full bg-gradient-to-r from-[#7A61DA] to-[#ff7a7a] shadow-lg">
          <img
            src={logo}
            alt=""
            className=" h-24 w-24 rounded-full shadow-xl lg:h-32 lg:w-32"
          />
        </div>
      </div>
      <h1 className=" text-center text-6xl lg:text-8xl tracking-wide lg:tracking-normal  font-bold bg-gradient-to-tr from-[#7A61DA] to-[#ff7a7a] bg-clip-text text-transparent">
        CSI <br className=" lg:hidden" />
        DITU
      </h1>
      <h1 className=" text-center lg:text-4xl text-2xl tracking-wide mt-1 text-[#A6A8AD] font-semibold">
        Technical Club
      </h1>
      <div className="lg:pt-8">
        <Button title="About Us" setPage={setPage} />
      </div>
      <div className=" flex space-x-3 mt-3">
        <Button title="The Team" setPage={setPage} />
        <Button title="Events" setPage={setPage} />
      </div>
      <Socials />
    </div>
  );
}

export default Hero;
