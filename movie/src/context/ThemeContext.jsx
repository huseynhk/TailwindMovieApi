import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    toggleTheme();
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    // setTheme(theme == "dark" ? "light" : "dark");
  };

  const Component = ThemeContext.Provider;
  return <Component value={{ theme, handleThemeSwitch }}>{children}</Component>;
};

const useThemeContext = () => useContext(ThemeContext);
export { ThemeContextProvider, useThemeContext };
