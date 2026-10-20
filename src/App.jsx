import Calculator from "./components/Calculator";
import { ThemeProvider } from "./hooks/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen flex items-center justify-center bg-bg-main">
        <Calculator />
      </main>
    </ThemeProvider>
  );
}
