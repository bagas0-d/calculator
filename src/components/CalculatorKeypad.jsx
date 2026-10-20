const keyBase =
  "flex items-center justify-center rounded-md border-0 border-b-4 px-2 py-3 text-[24px] leading-none transition-[filter,transform] duration-100 active:translate-y-[2px] active:border-b-2";

const keyNumber = `${keyBase} bg-key-gray border-key-gray-shadow text-text-primary`;

const keyAction = `${keyBase} bg-key-blue border-key-blue-shadow text-text-secondary text-base sm:text-lg`;

const keyEqual = `${keyBase} bg-key-red border-key-red-shadow text-text-secondary`;

export default function CalculatorKeypad({ handleInput, reset, run }) {
  return (
    <div className="mt-6 rounded-lg bg-bg-keypad p-6 sm:p-8">
      <div className="grid grid-cols-4 gap-3 sm:gap-5">
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            type="button"
            value={num}
            onClick={handleInput}
            className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
          >
            {num}
          </button>
        ))}

        <button
          type="button"
          value="delete"
          onClick={handleInput}
          className={`${keyAction} hover:cursor-pointer hover:brightness-125`}
        >
          DEL
        </button>

        {[4, 5, 6].map((num) => (
          <button
            key={num}
            type="button"
            value={num}
            onClick={handleInput}
            className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
          >
            {num}
          </button>
        ))}

        <button
          type="button"
          value="+"
          onClick={handleInput}
          className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
        >
          +
        </button>

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            type="button"
            value={num}
            onClick={handleInput}
            className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
          >
            {num}
          </button>
        ))}

        <button
          type="button"
          value="-"
          onClick={handleInput}
          className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
        >
          -
        </button>

        <button
          type="button"
          value="."
          onClick={handleInput}
          className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
        >
          .
        </button>

        <button
          type="button"
          value={0}
          onClick={handleInput}
          className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
        >
          0
        </button>

        <button
          type="button"
          value="/"
          onClick={handleInput}
          className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
        >
          /
        </button>

        <button
          type="button"
          value="x"
          onClick={handleInput}
          className={`${keyNumber} hover:cursor-pointer hover:brightness-110`}
        >
          x
        </button>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5">
        <button
          type="button"
          onClick={reset}
          className={`${keyAction} min-h-12 hover:cursor-pointer hover:brightness-125`}
        >
          RESET
        </button>

        <button
          type="button"
          onClick={run}
          className={`${keyEqual} min-h-12 hover:cursor-pointer hover:brightness-125`}
        >
          =
        </button>
      </div>
    </div>
  );
}
