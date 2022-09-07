import React from "react";
import Button from "./Button";
import Members from "./Members";
import akshit from "../media/akshit.jpeg";
import karan from "../media/karan.jpeg";
import tandon from "../media/tandon.jpeg";
import mait from "../media/maitreyee.jpg";
import ankit from "../media/ankit.jpg";
import ambar from "../media/ambar.jpg";
import abhishek from "../media/abhishek.jpeg";
import van from "../media/van.jpeg";
import amogh from "../media/amogh.jpg";

function Team({ setPage }) {
  return (
    <div className=" bg-[#2f3340] h-fit w-[80vw] lg:h-fit lg:w-[37vw] rounded-3xl shadow-xl flex flex-col items-center p-10 lg:pb-9 space-y-4">
      <div className="self-start ">
        <Button title="back" setPage={setPage} />
      </div>
      <h1 className=" text-center text-4xl lg:text-6xl self-start mt-10 font-bold bg-gradient-to-tr from-[#7A61DA] to-[#ff7a7a] bg-clip-text text-transparent">
        The Team
      </h1>
      <h1 className="self-start text-center lg:text-3xl text-lg tracking-wide mt-1 text-[#A6A8AD] font-semibold pt-2">
        IV Year
      </h1>
      <div className="grid self-start grid-cols-3 gap-3 lg:gap-5 lg:grid-cols-5">
        <Members name="Abhishek" position="President" image={abhishek} />
      </div>
      <h1 className="self-start text-center lg:text-3xl text-lg tracking-wide mt-1 text-[#A6A8AD] font-semibold pt-2">
        III Year
      </h1>
      <div className="grid self-start grid-cols-3 gap-3 lg:gap-5 lg:grid-cols-5">
        <Members name="Akshit" position="Club Head" image={akshit} />
        <Members name="Vanshika" position="Secretary" image={van} />
        <Members name="Yashdeep" position="Tech Head" image={tandon} />
        <Members name="Maitreyee" position="Creative Head" image={mait} />
        <Members name="Amogh" position="Mgmt Head" image={amogh} />
        <Members name="Ambar" position="Mgmt Head" image={ambar} />
        <Members name="Karan" position="Volunteer" image={karan} />
        <Members name="Ankit" position="Volunteer" image={ankit} />
      </div>
    </div>
  );
}

export default Team;
