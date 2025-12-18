import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // LocalStorage check karte hain taaki refresh karne par theme yaad rahe
  const [theme, setTheme] = useState(
    localStorage.getItem("appTheme") || "dark"
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // Body tag par class add/remove karenge
    document.body.className = theme;
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};