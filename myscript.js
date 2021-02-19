function checkPrimeNumber(){
    let number = document.getElementById('number').value;
    let count = 0;
    if(number < 2){
        document.getElementById("Result1").innerHTML="Không phải là số nguyên tố";
        return false;
    }
    else{
        for(let i = 1; i<= number; i++){
            if (number%i==0)
                count++;
        }
        if (count > 2){
            document.getElementById("Result1").innerHTML="Không phải là số nguyên tố";
            return false;
        }else{
            document.getElementById("Result1").innerHTML="Số nguyên tố";
            return true;
        }
    }
}

function checkPrimeNumber2(number){
    
    let count = 0;
    if(number < 2){
        return 0;
    }
    else{
        for(let i = 1; i <= number; i++){
            if (number % i== 0)
                count++;
        }
        if (count > 2){
            return 0;
        }else{
            return 1;
        }
    }
}

function Sum(){
    let number2 = document.getElementById('number2').value;
    let sum = 0;

    for(let j = 1; j <= number2; j++){
        if (checkPrimeNumber2(j) == 1){
            sum = sum + j;        
        }
    }
    
    document.getElementById("Result2").innerHTML = sum;
}