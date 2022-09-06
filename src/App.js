import React from "react";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <body className=" h-screen test bg-[#272B36] flex items-center justify-center space-y-5 font-poppins flex-col">
      <div className=" z-10">
        <Hero />
      </div>
      <h1 className=" bg-[#2f3340] px-4 py-2 text-xs rounded-3xl shadow-xl text-[#A6A8AD] lg:text-base">
        Made by Akshit
      </h1>
    </body>
  );
}

export default App;
