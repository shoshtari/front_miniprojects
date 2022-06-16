memory = 0;
function addChar(n){
    let value = document.getElementById("result").textContent;
    value += n;
    document.getElementById("result").innerHTML = value;
}
function calc(){
    let element = document.getElementById("result");
    expression = element.textContent;
    element.innerHTML = eval(expression);
}
function reset(){

    let element = document.getElementById("result");
    element.innerHTML = "";
}
function memPlus(stat){
    let value = document.getElementById("result").textContent;
    value = eval(value);
    if (stat==1){
        memory += value
    }
    else{
        memory -= value;
    }
}
function memRead(){
    let element = document.getElementById("result");
    element.innerHTML = memory;
}