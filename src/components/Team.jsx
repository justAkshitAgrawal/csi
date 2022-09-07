import React from "react";
import Button from "./Button";
import Members from "./Members";
import akshit from "../media/akshit.jpeg";
import karan from "../media/karan.jpeg";
import tandon from "../media/tandon.jpeg";

function Team({ setPage }) {
  return (
    <div className=" bg-[#2f3340] h-fit w-[80vw] lg:h-fit lg:w-[37vw] rounded-3xl shadow-xl flex flex-col items-center p-10 lg:pb-9 space-y-4">
      <div className=" self-start">
        <Button title="back" setPage={setPage} />
      </div>
      <h1 className=" text-center text-4xl lg:text-6xl self-start mt-10 font-bold bg-gradient-to-tr from-[#7A61DA] to-[#ff7a7a] bg-clip-text text-transparent">
        The Team
      </h1>
      <h1 className="self-start text-center lg:text-3xl text-lg tracking-wide mt-1 text-[#A6A8AD] font-semibold pt-2">
        IV Year Team
      </h1>
      <h1 className="self-start text-center lg:text-3xl text-lg tracking-wide mt-1 text-[#A6A8AD] font-semibold pt-2">
        III Year Team
      </h1>
      <div className=" flex space-x-3 self-start">
        <Members name="Akshit" position="Club Head" image={akshit} />
        <Members name="Yashdeep" position="Tech Head" image={karan} />
        <Members name="Karan" position="Tech Head" image={tandon} />
      </div>
    </div>
  );
}

export default Team;
