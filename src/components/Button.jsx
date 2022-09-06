import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function Button({ title }) {
  return (
    <button className=" bg-[#3E4352] px-4 py-2 rounded-xl  text-[#B0B2B8] uppercase tracking-widest font-semibold lg:text-2xl outline-none flex items-center group">
      {title}
      <h1 className=" hidden group-hover:flex ease-in-out">
        <AiOutlineRight />
      </h1>
    </button>
  );
}

export default Button;
