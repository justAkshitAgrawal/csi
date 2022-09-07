import React from "react";
import Button from "./Button";

function About({ setPage }) {
  return (
    <div className=" bg-[#2f3340] h-fit w-[80vw] lg:h-fit lg:w-[37vw] rounded-3xl shadow-xl flex flex-col items-center p-10 lg:pb-9 space-y-4">
      <div className=" self-start">
        <Button title="back" setPage={setPage} />
      </div>
      <h1 className=" text-center text-4xl lg:text-6xl self-start mt-10 font-bold bg-gradient-to-tr from-[#7A61DA] to-[#ff7a7a] bg-clip-text text-transparent">
        About Us
      </h1>
    </div>
  );
}

export default About;
