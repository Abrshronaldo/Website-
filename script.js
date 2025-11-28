


document.getElementById("demo").style.color = "red";

document.getElementById("myButton").onclick = function() {
    alert("Button clicked!");
};

function App() {
  return <h1>Hello, React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
