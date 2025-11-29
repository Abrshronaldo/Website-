


import React, { useState } from "react";

function App() {
  return <h1>Hello, React!</h1>;
}


function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={() => setCount(count - 1)}>Decrease</button>
    <Counter />

    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

