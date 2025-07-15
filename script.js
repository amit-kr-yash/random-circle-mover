const button=document.querySelector("#moveBtn");
const circle=document.querySelector("#circle");

 button.addEventListener("click",()=>{

  const diameter=100;

  const x=window.innerWidth-diameter;
  const y=window.innerHeight-diameter;

  const randx=Math.random()*x;
  const randy=Math.random()*y;

  circle.style.left = `${randx}px`;
  circle.style.top = `${randy}px`;

 });