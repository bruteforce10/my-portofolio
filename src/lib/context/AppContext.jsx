import React, { createContext, useContext } from "react";
import localFont from "next/font/local";

const AppContext = createContext();
const MyContext = () => useContext(AppContext);

const fontPrimary = localFont({
  src: "../../../public/fonts/grifter.otf",
});
const AppContextProvider = (props) => {
  return (
    <AppContext.Provider value={{ fontPrimary }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext, MyContext };
