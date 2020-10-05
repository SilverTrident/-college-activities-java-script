function price() {
    let price = {
        'value': document.getElementById('price-value').value,
        'type': document.getElementById('price-category').value
    }

    document.getElementById('response-price').innerHTML= calcPrice(price.value,price.type);
}

function calcPrice(valu, type) {
    let val = parseFloat(valu);
    if (type == 1) {
        let calc = val - (val * 5 / 100);
        return `Pagamento a vista com 5% de desconto no valor de: ${calc.toFixed(2)}R$`;
    } else if (type == 2) {
        let calc = val + (val * 10 / 100);
        let installment = calc / 3;
        return `Pagamento em 3X de ${installment.toFixed(2)}R$ com total de ${calc.toFixed(2)}R$`
    } else if (type == 3) {
        let calc = val + (val * 20 / 100);
        let installment = calc / 5;
        return `Pagamento em 5X de ${installment.toFixed(2)}R$ com total de ${calc.toFixed(2)}R$`
    }
}