function getNum(num){
    var store_value = document.getElementById("result");
    
    store_value.value += num;
    
}

function clearResult(){
    var store_value = document.getElementById("result");
    store_value.value ="";
}

function getResult(){
    var store_value = document.getElementById("result");
    store_value.value = eval(store_value.value);
}