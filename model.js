//alert("Bienvenido al primer borrador del programa. Es muy basico pero ya se ira mejorando.");
var input = document.getElementById("input")
var result = document.getElementById("result")

input.addEventListener("keyup", myResult);


function myResult(){
if (Number(input.value)>365) {
  alert("No more than 365 days please")}
else {
  result.value = -0.0002*Number(input.value)**2-0.0137*Number(input.value)+40.015}
}