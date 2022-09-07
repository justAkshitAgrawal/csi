import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

function Socials() {
  return (
    <div className=" flex space-x-3 mt-10 bg-[#3E4352] px-3 py-2 rounded-3xl shadow-xl lg:mt-20 lg:px-5 lg:py-3 lg:space-x-5">
      <a
        href="https://www.instagram.com/csi_ditu/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineInstagram className=" text-white h-7 w-7 lg:h-10 lg:w-10 cursor-pointer hover:scale-125 transition-all" />
      </a>
      <a
        href="https://m.facebook.com/CSI-DITU-Student-Chapter-291769358281687/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineFacebook className=" text-white h-7 w-7 lg:h-10 lg:w-10 cursor-pointer hover:scale-125 transition-all" />
      </a>
      <a
        href="https://twitter.com/csi_dituchapter"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter className=" text-white h-7 w-7 lg:h-10 lg:w-10 cursor-pointer hover:scale-125 transition-all" />
      </a>
    </div>
  );
}

export default Socials;
