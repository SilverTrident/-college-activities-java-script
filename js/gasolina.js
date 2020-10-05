
function gasoline(){
    let gas = {
        'gasoline' : document.getElementById('field-gasolina').value,
        'alcohol' : document.getElementById('field-alcool').value
    }

    document.getElementById('response-gasolina').innerHTML = `A melhor opção é ${calcGas(gas.alcohol, gas.gasoline)}`
}

function calcGas(alc, gaso){
    let gasoline = parseFloat(gaso);    
    let alcohol = parseFloat(alc);
        
    if(alcohol <= (gasoline*70/100)){
        return 'ALCOHOL'
    }else{
        return 'GASOLINE'
    }   
}