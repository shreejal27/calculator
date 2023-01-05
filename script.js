const numberButtons = document.querySelectorAll(".operand");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const dotButton = document.querySelector(".dot");
const upperClassTextElement = document.getElementById("top");
const lowerClassTextElement = document.getElementById("bottom");

let values = [];
let values1 = [];
let operand1=0;
let operand2=0;


numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        appendNumber(button.innerText);
  
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        operation(button.innerText);
    });
});

equalsButton.addEventListener('click', ()=>{
        calculate();
    });


deleteButton.addEventListener('click', ()=>{
        values.pop();
        updateLowerDisplay();
    });

clearButton.addEventListener('click', ()=>{
        clear();
    });

dotButton.addEventListener('click',()=>{
        if(!values.includes('.')){
            values.push(dotButton.innerText);
            updateLowerDisplay();
        
        }

});

function clear(){
    upperClassTextElement.innerText="";
    lowerClassTextElement.innerText="0";
    values.length = 0;
    values1.length = 0;
    operand1=0;
}


function appendNumber(number){
    if(check()){
        values.push(number);
        updateLowerDisplay();
    }
    else{
        values1.push(number);
        updateLowerDisplay();
    }
}

function operation(operator){
    operand1 = values;
    lowerClassTextElement.innerText="";
    upperClassTextElement.innerText= (values.join('')+" "+ operator);

    calculate(operator);

}

function calculate(operator){
    let num = parseInt(values.join(''));
    console.log(num); 
    console.log("calculated");
}

function updateLowerDisplay(){
    if(check()){
        
        lowerClassTextElement.innerText= values.join('');
    }
    else{
        lowerClassTextElement.innerText= values1.join('');
    }
    
}

function updateUpperDisplay(){
    upperClassTextElement.innerText= values.join('');
 }

function check(){
    if (operand1 == 0){
        return true;
}
}