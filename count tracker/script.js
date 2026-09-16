let result=document.getElementById("res");
let inc=document.getElementById("increase");
let dec=document.getElementById("decrease");
let reset=document.getElementById("reset");
let count=0;
inc.addEventListener("click",function(){
    count++;
    result.textContent=count;
});
dec.addEventListener("click",function(){
    count--;
    result.textContent= count;
});
reset.addEventListener("click",function(){
    count=0;
    result.textContent=count;
});
