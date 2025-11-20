


document.getElementById("demo").style.color = "red";

document.getElementById("myButton").onclick = function() {
    alert("Button clicked!");
};
// Get the canvas element
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw a line
ctx.beginPath();       // start a new path
ctx.moveTo(50, 50);    // starting point (x=50, y=50)
ctx.lineTo(300, 150);  // ending point (x=300, y=150)
ctx.stroke();          // actually draw the line


const circle = document.getElementById("myCircle");
  // Change color
  
  let x = 100;
  setInterval(() => {
    x += 20;
    circle.setAttribute("cx", x);
  }, 1000);
