let studentname=document.getElementById("studentname");
let marks=document.getElementById("marks");
let calculate=document.getElementById("calculate");
let result=document.getElementById("result");
calculate.addEventListener("click",function(){
    let name=studentname.value;
    let mark=Number(marks.value);
    let gr;
    if(name==="" || marks.value===""){
        result.textContent="Please enetr the above details";
        return;

    }
    if(mark>100 || mark<0){
        result.textContent="Please enter marks between 1 to 100";
        return;
    }
    if(mark>=90 && mark<=100){
        gr="A+";
    }
    else if(mark>=80 && mark<90){
        gr="A";
    }
    else if(mark>=70 && mark<80){
        gr="B";
    }
    else if(mark>=60 && mark<70){
        gr="C";
    }
    else{
        gr="Fail";
    }
    result.textContent= name  + " Got " +  gr;
});