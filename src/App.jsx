import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-[url('https://shorturl.at/YZBhZ')] bg-no-repeat bg-cover">
      <div className="">
        <Header />
      </div>
      <div className="w-full h-[89vh] flex justify-center items-center">
        <Home />
      </div>
    </div>
  );
};

export default App;
