function speed(){
    let averageSpeed = {
        'km' : document.getElementById('speed-space').value,
        'hour': document.getElementById('speed-hour').value,
        'average' : ''
    }
      averageSpeed.average  = average(averageSpeed.hour, averageSpeed.km);

    document.getElementById('response-speed').innerHTML = ` O veículo tem uma velocidade média de
     ${averageSpeed.average}KM/h`
   
}

function average(hour,  distance){
    let t = parseFloat(hour);
    let e = parseFloat(distance);
    
    return (e/t).toFixed(0);
}