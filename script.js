const input = document.getElementById("number_input");

function handle(btn){
    input.value += btn.innerText;
}
function clear(){
    if(input.value.length > 0){
        input.value = "";
    }
}
function equals(){
    let result = eval(input.value);
    input.value = result;
}
function del(){
    if(input.value.length > 0){
        input.value = input.value.slice(0,-1);
    }
}
function plusminus(){
    if(input.value.length > 0){
        if(input.value[0] == '-'){
            input.value = input.value.slice(1);
        }
        else{
            input.value = '-' + input.value;
        }
    }
}
function divide(btn){
    input.value += '/';
}
function multiply(btn){
    input.value += '*';
}