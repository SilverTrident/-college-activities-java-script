
function celsius(){
    let cel = document.getElementById('field-celsius').value;
    
    document.getElementById('response-celsius').innerHTML = `A temperatura em Farenheit ${degrees(cel)}°`

}
function degrees(celsius){
   let value = parseFloat(celsius);
    return value*1.8+32;
}