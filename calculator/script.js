let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let result=document.getElementById("result");
let buttons=document.querySelectorAll("button");
buttons[0].addEventListener("click",function(){
    let number1=Number(num1.value);
    let number2=Number(num2.value);
    let answer=number1+number2;
    result.textContent=answer;
});
buttons[1].addEventListener("click",function(){
    let number1=Number(num1.value);
    let number2=Number(num2.value);
    let answer=number1-number2;
    result.textContent=answer;
});
buttons[2].addEventListener("click",function(){
    let number1=Number(num1.value);
    let number2=Number(num2.value);
    let answer=number1*number2;
    result.textContent=answer;
});
buttons[3].addEventListener("click",function(){
    let number1=Number(num1.value);
    let number2=Number(num2.value);
    if(number2===0){
        result.textContent="Error: Division by zero";
    } else {
        let answer=number1/number2;
        result.textContent=answer;
    }
  
});