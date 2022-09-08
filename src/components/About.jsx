import React from "react";
import Button from "./Button";

function About({ setPage }) {
  return (
    <div className=" bg-[#2f3340] h-fit w-[80vw] lg:h-fit lg:w-[37vw] rounded-3xl shadow-xl flex flex-col items-center p-10 lg:pb-9 space-y-4 overflow-y-auto max-h-[80vh] scrollbar-hide">
      <div className="self-start ">
        <Button title="back" setPage={setPage} />
      </div>
      <h1 className=" text-center text-4xl lg:text-6xl self-start mt-10 font-bold bg-gradient-to-tr from-[#7A61DA] to-[#ff7a7a] bg-clip-text text-transparent">
        About Us
      </h1>
      <h1 className="self-start text-xs lg:text-lg text-[#A6A8AD] pt-2">
        The Computer society of India, a.k.a, CSI is a student led society which
        aims to promote tech literacy. We are a bunch of geeks set to make the
        ever elolving world of Information Technology more enjoyable,and
        understandable for everyone. This society began in 1965 when a group of
        students from the College came together to share their passion for
        technology with the world. It has been our agenda to profess that
        computing is beyond writing complex code. <div className="pt-2 "></div>
        We are dedicated to the promotion of various facets of conputing. We
        strive to promote gaming, technology, applications, programming, science
        and fiction. <div className="pt-2 "></div> Most importantly,we wish to
        familiarize people with technology,to increase digital literacy through
        fun events, talks, workshops, quizzes, Hackathons, tech hunt, blogs and
        instagram posts.
        <div className="pt-2 "></div> We are melange of people brought together
        by a common idea:{" "}
        <span className="font-semibold underline ">Tech is the future.</span>
      </h1>
    </div>
  );
}

export default About;
