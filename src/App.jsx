import React from "react";
import Home from "./page/home/Home";
import { ThemeContactProvider, ThemeContext } from "./context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeContactProvider>
        {/* <CustomizedAccordions /> */}
        <Home />
      </ThemeContactProvider>
    </div>
  );
};

export default App;
