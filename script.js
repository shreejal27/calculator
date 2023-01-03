const numberButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll("operator");
const equalsButton = document.querySelector("equals");
const deleteButton = document.querySelector("delete");
const clearButton = document.querySelector("clear");
const upperClassTextElement = document.querySelector("upperScreen");
const lowerClassTextElement = document.querySelector("lowerScreen");

var currentOperand= 0;
var previousOperand= 0;

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        appendNumber(button.innerText);
        updateDisplay(button.innerText);
    });
})

function handleClick(){
    console.log("Clickced");
}

function clear(){

}

function deletee(){

}

function appendNumber(number){
  
 
}

function operation(operation){

}

function calculate(){

}

function updateDisplay(number){
   lowerClassTextElement.innerText= number;
}