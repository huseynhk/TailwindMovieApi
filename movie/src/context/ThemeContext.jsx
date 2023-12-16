import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const contextValue = {};
  const Component = ThemeContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};

const useThemeContext = () => useContext(ThemeContext);
export { ThemeContextProvider, useThemeContext };
