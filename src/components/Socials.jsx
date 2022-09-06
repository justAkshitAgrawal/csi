import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

function Socials() {
  return (
    <div className=" flex space-x-3 mt-10 bg-[#3E4352] px-3 py-2 rounded-3xl shadow-xl lg:mt-20 lg:px-5 lg:py-3 lg:space-x-5">
      <AiOutlineInstagram className=" text-white h-7 w-7 lg:h-10 lg:w-10 cursor-pointer" />
      <AiOutlineFacebook className=" text-white h-7 w-7 lg:h-10 lg:w-10 cursor-pointer" />
      <AiOutlineTwitter className=" text-white h-7 w-7 lg:h-10 lg:w-10 cursor-pointer" />
    </div>
  );
}

export default Socials;
