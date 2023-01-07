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
let o;


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
       deletee();
    });

clearButton.addEventListener('click', ()=>{
        clear();
    });

dotButton.addEventListener('click',()=>{
        if(!values.includes('.')){
            values.push(dotButton.innerText);
            updateLowerDisplay();
        
        }

        if( !values1.includes('.') && operand1 != 0){
                values1.push(dotButton.innerText);
                updateLowerDisplay();
           
        }


});

function deletee(){
    if(check()){
        values.pop();
        updateLowerDisplay();
    }
    else{
        values1.pop();
        updateLowerDisplay();
    }
}
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
    o= operator;
    if(updateLowerDisplay()){
        calculate();
    }

    
}

function calculate(){

    operand1 = upperClassTextElement.innerHTML;
    operand2 = lowerClassTextElement.innerHTML;
    var a=  parseInt(operand1);
    var b= parseInt(operand2);
    var temp;
    upperClassTextElement.innerText= "";
    if (o == "+"){
    clear();
     temp = a+b;
     lowerClassTextElement.innerHTML = temp;
     values.push(temp);
    }
    if (o == "-"){
        clear();
         temp = a-b;
         lowerClassTextElement.innerHTML = temp;
         values.push(temp);
        }
        if (o == "*"){
            clear();
             temp = a*b;
             lowerClassTextElement.innerHTML = temp;
             values.push(temp);
            }
            if (o == "/"){
                clear();
                 temp = a/b;
                 lowerClassTextElement.innerHTML = temp;
                 values.push(temp);
                }
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