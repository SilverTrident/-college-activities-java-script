
function farenheit(){
    let faren = document.getElementById('field-farenheit').value;
    
    document.getElementById('response-farenheit').innerHTML = `A temperatura em Celsius ${degrees(faren)}°`

}
function degrees(farenhei){
   let value = parseFloat(farenhei);
    return (5*(value-32)/9).toFixed(2);
}