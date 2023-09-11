import React, { createContext, useContext, useState } from "react";
import localFont from "next/font/local";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const fontPrimary = localFont({
  src: "../../../public/fonts/grifter.otf",
});
const AppContextProvider = (props) => {
  const [activeSection, setActiveSection] = useState(null);
  return (
    <AppContext.Provider
      value={{ fontPrimary, activeSection, setActiveSection }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, MyContext };
