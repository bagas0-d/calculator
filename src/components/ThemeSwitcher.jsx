import { useTheme } from "../hooks/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, handleSwitch } = useTheme();

  return (
    <div className={`${theme === 1? "text-text-secondary" : "text-text-primary"} flex items-end gap-5`}>
      <h2 className="mb-1 text-xs font-bold uppercase tracking-wider">Theme</h2>

      <div className="flex flex-col gap-1">
        <div className="flex justify-around px-1 text-xs">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <button
          type="button"
          onClick={handleSwitch}
          aria-label={`Current theme ${theme}. Switch theme`}
          className="flex h-6 w-[72px] items-center rounded-full bg-bg-keypad p-1 hover:cursor-pointer"
        >
          <span
            className={`h-4 w-4 rounded-full bg-key-red transition-transform duration-200 ${
              theme === 1
                ? "translate-x-0"
                : theme === 2
                  ? "translate-x-6"
                  : "translate-x-12"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
