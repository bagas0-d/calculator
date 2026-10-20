import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../hooks/ThemeContext";

export default function CalculatorHeader() {
  const {theme} = useTheme();

  return (
    <header className={`${theme === 1? "text-text-secondary" : "text-text-primary"} flex items-center justify-between`}>
      <h1 className="text-[32px] leading-none font-bold">calc</h1>

      <ThemeSwitcher />
    </header>
  );
}
