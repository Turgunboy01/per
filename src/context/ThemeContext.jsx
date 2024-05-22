import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContactProvider = ({ children }) => {
  const [clickMoon, setClickMoon] = useState(false);
  return (
    <ThemeContext.Provider value={{ clickMoon, setClickMoon }}>
      {children}
    </ThemeContext.Provider>
  );
};
