import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : ""}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
