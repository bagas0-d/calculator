import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(1);

  function handleSwitch() {
    setTheme((prev) => (prev === 3 ? 1 : prev + 1));
  }

  return (
    <ThemeContext.Provider value={{ theme, handleSwitch }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
