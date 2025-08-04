import React, { createContext } from "react";
import { doctors } from "../assets/assets";

// Create the context
export const AppContext = createContext();

// Provider component
const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";

  const value = {
    doctors,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
