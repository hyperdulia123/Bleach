//alert("Bienvenido al primer borrador del programa. El poder predictivo es minimo, pero ira mejorando al cabo del tiempo.");
function add(){
  document.getElementById("add").innerHTML +=
  '<div id= "newcoform"><select id= "coform"><option>-</option><option>Surfactant</option><option>Perfume</option><option>Corrosion inhibitor</option></select> at a concentration of: <input type="text" id="coformconc"> g/L<br></div>';
  
}

function remove(){
  const element = document.getElementById("newcoform");
  element.remove()
}


var input = document.getElementById("input")
var result = document.getElementById("result")
var temperature = document.getElementById("temperature")
var startingConc = document.getElementById("startingConc")

calculate.addEventListener("click", myResult);


function myResult(){
if (Number(input.value)>365) {
  alert("No more than 365 days please")}
if (temperature = 20 && startingConc.value == 40) {
  result.value = -0.0002*Number(input.value)**2-0.0137*Number(input.value)+40.015}
else{
  result.value= "No data available for estimate"
}
}

// function calculate(){
//   input.myResult
// startingConc.value == 40 && temperature = 20 


