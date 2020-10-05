
function imc(){
    let imc = {
        'height' : document.getElementById('imc-height').value,
        'weight' : document.getElementById('imc-weight').value,
    }

    document.getElementById('response-imc').innerHTML = `Você encontra-se no estado de ${calcImc(imc.height, imc.weight)}`

}

function calcImc(h,w){
    let height = parseFloat(h);
    let weight = parseFloat(w);
    let bmi = weight/(height*height);
    if(bmi <= 18.4){
        return `ABAIXO DO PESO - IMC DE ${bmi.toFixed(2)}`;
    }else if(bmi > 18.4 && bmi <=24.9){
        return `SAUDÁVEL - IMC DE ${bmi.toFixed(2)}`;
    }else if(bmi > 24.9 && bmi <=29.9){
        return `SOBREPESO - IMC DE ${bmi.toFixed(2)}`;
    }else if(bmi > 29.9 && bmi <=39.9){
        return `OBESO - IMC DE ${bmi.toFixed(2)}`;
    }else if(bmi > 40){
        return `EXTREMO OU ALTO RISCO DE OBESIDADE - IMC DE ${bmi.toFixed(2)}`;
    }else{
        return 'error';
    }
   
}