


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


const circle = document.getElementById("A");

const lineB = document.getElementById("B");


const lineC = document.getElementById("C");
 
const lineD = document.getElementById("D");

const lineE = document.getElementById("E");


const lineF = document.getElementById("F");

  let A=100;
  let B=100;
  let C=80;
  let C1=100;
  let D=100;
  let D1=120;
  let E=90;
  let E1=100;
  let F=100;
  let F1=110;
let x = true;
  setInterval(() => {
    if(x===true){
    A+=20;   
   B+=20;
  C+=60;
  C1+=60;
  E+=30;
  E1+=30;

x=false;
 circle.setAttribute("cx", A);
lineB.setAttribute("x1", B);
lineB.setAttribute("x2", B);
lineC.setAttribute("x1",C);
lineC.setAttribute("x1",C1);
lineE.setAttribute("x1",E);
   lineE.setAttribute("x1",E1);
 } 


if(x===false){
    A+=20;
   B+=20;
  D+=60;
  D1+=60;
  F+=30;
  F1+=30;

x=true;
 circle.setAttribute("cx", A);
lineB.setAttribute("x1", B);
lineB.setAttribute("x2", B);
lineD.setAttribute("x1",D);
lineD.setAttribute("x1",D1);
lineF.setAttribute("x1",F);
   lineF.setAttribute("x1",F1);



  }, 1000);

