import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Button({ title, setPage }) {
  return (
    <button
      onClick={() => setPage(title)}
      className=" bg-[#3E4352] px-4 py-2 rounded-xl max-h-[70vh] text-[#B0B2B8] hover:scale-105 transition-all uppercase tracking-widest font-semibold lg:text-2xl outline-none flex items-center group group-hover:transition-all"
    >
      {title}
      <h1 className=" hidden group-hover:flex transition-all">
        {title === "back" ? <AiOutlineLeft /> : <AiOutlineRight />}
      </h1>
    </button>
  );
}

export default Button;
