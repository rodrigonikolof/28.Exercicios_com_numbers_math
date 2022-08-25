let inputNum = document.getElementById("inputNum"); 

let submitBtn = document.getElementById("submitBtn"); 

let myNumHeader = document.getElementById("myNum");




submitBtn.onclick = function () {
    
    let userNum = parseFloat(inputNum.value);
    myNumHeader.innerHTML = `Your number is ${userNum}`;

    document.getElementById("square").innerHTML = `Square root is ${Math.sqrt(userNum).toFixed(2)}`;
    document.getElementById("inteiro").innerHTML = `Is ${userNum} a whole number? ${Number.isInteger(userNum)}`;
    document.getElementById("notANumber").innerHTML = `Is ${userNum} NaN? ${Number.isNaN(userNum)}`;
}

