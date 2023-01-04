const numberButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const dotButton = document.querySelector(".dot");
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
        console.log(button.innerText);
    });
});

equalsButton.addEventListener('click', ()=>{
        console.log("=");
    });


deleteButton.addEventListener('click', ()=>{
        values.pop();
        updateLowerDisplay();
    });

clearButton.addEventListener('click', ()=>{
        clear();
    });

dotButton.addEventListener('click',()=>{
        if(values.includes('.')){
            console.log("dot is there");
        }
        else{
            values.push(dotButton.innerText);
            updateLowerDisplay();
            console.log("dot added")
        }

});

function clear(){
    upperClassTextElement.innerText="";
    lowerClassTextElement.innerText="0";
    values.length = 0;
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