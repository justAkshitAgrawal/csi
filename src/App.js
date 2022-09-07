import React from "react";
import "./App.css";
import About from "./components/About";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Team from "./components/Team";

function App() {
  const [page, setPage] = React.useState("home");
  return (
    <body className=" h-screen test bg-[#272B36] flex items-center justify-center space-y-5 font-poppins flex-col">
      <div className=" z-10">
        {(page === "home" || page === "back") && <Hero setPage={setPage} />}
        {page === "The Team" && <Team setPage={setPage} />}
        {page === "About Us" && <About setPage={setPage} />}
        {page === "Events" && <Events setPage={setPage} />}
      </div>
      {(page === "home" || page === "back") && (
        <h1 className=" bg-[#2f3340] px-4 py-2 text-xs rounded-3xl shadow-xl text-[#A6A8AD] lg:text-base">
          Made by Akshit
        </h1>
      )}
    </body>
  );
}

export default App;
