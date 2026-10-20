import { useState, useRef } from "react";

export default function useCalculator() {
  const [tokens, setTokens] = useState([]);
  const [currentNumber, setCurrentNumber] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const values = useRef([]);
  const operators = useRef([]);

  function handleInput(e) {
    const { value } = e.currentTarget;
    const isOperator = isNaN(value);

    if (currentNumber === "" && isOperator) return;

    if (value === "delete" && isCalculated) {
      setCurrentNumber("");
      return;
    } else if (value === "delete" && currentNumber.length > 0) {
      setCurrentNumber((prev) => prev.slice(0, -1));
      return;
    }

    if (!isOperator) {
      if (isCalculated) {
        setCurrentNumber(value);
        setTokens([]);
        setIsCalculated(false);
      } else {
        setCurrentNumber((prev) => prev + value);
      }
    } else if (value === "." && currentNumber.length > 0) {
      setCurrentNumber((prev) => prev + value);
    } else {
      setTokens((prev) => [...prev, currentNumber, value]);
      setCurrentNumber("");
      setIsCalculated(false);
    }
  }

  function reset() {
    setCurrentNumber("");
    setTokens([]);
    setIsCalculated(false);
    values.current = [];
    operators.current = [];
  }

  function precedence(op) {
    if (op === "x" || op === "/") return 2;
    if (op === "+" || op === "-") return 1;
    return 0;
  }

  function calculate() {
    const b = values.current.pop();
    const a = values.current.pop();
    const op = operators.current.pop();

    let result;

    switch (op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "x":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
      default:
        return;
    }

    console.log(`${a} ${op} ${b} = ${result}`);
    values.current.push(result);
  }

  function finalCalculation() {
    const expression = currentNumber ? [...tokens, currentNumber] : tokens;

    for (const token of expression) {
      if (!isNaN(token)) {
        values.current.push(Number(token));
      } else {
        while (
          operators.current.length > 0 &&
          precedence(operators.current[operators.current.length - 1]) >=
            precedence(token)
        ) {
          calculate();
        }

        operators.current.push(token);
      }
    }

    while (operators.current.length > 0) {
      calculate();
    }
  }

  function run() {
    finalCalculation();

    const result = values.current[0];

    setTokens([]);
    setCurrentNumber(String(result));
    setIsCalculated(true);

    values.current = [];
    operators.current = [];
  }

  function formatNumber(item) {
    return /^\d+$/.test(item)
      ? item.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      : item;
  }

  const display = [...tokens, currentNumber]
    .filter((item) => item !== "")
    .map(formatNumber)
    .join(" ");

  return {
    tokens,
    values,
    operators,
    currentNumber,
    display,
    handleInput,
    run,
    reset,
  };
}
