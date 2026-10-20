import useCalculator from "../hooks/useCalculator";

import CalculatorHeader from "./CalculatorHeader";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeypad from "./CalculatorKeypad";

export default function Calculator() {
  const { currentNumber, display, handleInput, run, reset } =
    useCalculator();

  return (
    <div className="mx-auto w-full max-w-[540px] px-8">
      <CalculatorHeader />

      <CalculatorDisplay
        display={display}
        currNumber={currentNumber}
      />

      <CalculatorKeypad
        handleInput={handleInput}
        run={run}
        reset={reset}
      />
    </div>
  );
}