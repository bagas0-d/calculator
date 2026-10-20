import { useTheme } from "../hooks/ThemeContext";

export default function CalculatorDisplay({ display }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme == 1 ? "text-text-secondary" : "text-text-primary"} mt-6 flex min-h-[100px] items-center justify-end overflow-hidden rounded-lg bg-bg-screen px-6 py-5 text-[32px] leading-none sm:min-h-[128px] sm:px-8 sm:text-[40px]`}
    >
      <span className="max-w-full overflow-x-auto whitespace-nowrap">
        {display}
      </span>
    </div>
  );
}
