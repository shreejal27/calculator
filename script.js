const numberButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const upperClassTextElement = document.getElementById("top");
const lowerClassTextElement = document.getElementById("bottom");

let values = [];

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        appendNumber(button.innerText);
  
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        check(button.innerText);
    });
});

equalsButton.addEventListener('click', ()=>{
        check("=");
    });


deleteButton.addEventListener('click', ()=>{
        values.pop();
        updateLowerDisplay();
    });

clearButton.addEventListener('click', ()=>{
        clear();
    });


function check(clickItem){
    console.log(clickItem);
}


function clear(){
    upperClassTextElement.innerText="";
    lowerClassTextElement.innerText="0";
}

function del(){

}

function appendNumber(number){
    values.push(number);
    updateLowerDisplay();
 
}

function operation(operation){

}

function calculate(){

}

function updateLowerDisplay(){
   lowerClassTextElement.innerText= values.join('');

}