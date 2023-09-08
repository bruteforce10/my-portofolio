import { AppContextProvider } from "@/lib/context/AppContext";
import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </React.Fragment>
  );
}
