// contexts/ThemeContext.jsx
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let theme = "theme-default";
  if (location.pathname === "/") {
    theme = "theme-home";
  } else if (location.pathname.startsWith("/experience")) {
    theme = "theme-experience";
  } else if (location.pathname.startsWith("/projects")) {
    theme = "theme-projects";
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};