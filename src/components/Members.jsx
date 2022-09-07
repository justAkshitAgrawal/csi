import React from "react";

function Members({ name, position, image }) {
  return (
    <div className="group relative">
      <img
        src={image}
        alt=""
        className=" h-16 w-16 rounded-xl lg:w-28 lg:h-28 group-hover:grayscale transition-all group-hover:scale-110 cursor-pointer"
      />
      <h1 className=" bg-black/50 p-2 rounded-xl text-center hidden group-hover:absolute group-hover:block text-sm lg:text-xl font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer">
        {name}
        <br />
        <span className="text-sm">{position}</span>
      </h1>
    </div>
  );
}

export default Members;
