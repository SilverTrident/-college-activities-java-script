function media() {
    let media = {
        'name': document.getElementById('media-name').value,
        'class': document.getElementById('media-class').value,
        'mention1': document.getElementById('media-mention1').value,
        'mention2': document.getElementById('media-mention2').value,
        'mention3': document.getElementById('media-mention3').value,
        'finalMedia': '',

    }


    if (calcMedia(media.mention1, media.mention2, media.mention3) <= 4) {
        media.finalMedia = "REPROVADO"
    } else if (calcMedia(media.mention1, media.mention2, media.mention3) > 4
        && calcMedia(media.mention1, media.mention2, media.mention3) < 6) {
        media.finalMedia = "RECUPERAÇÃO FINAL"
    } else if (calcMedia(media.mention1, media.mention2, media.mention3) > 6 &&
        calcMedia(media.mention1, media.mention2, media.mention3) <= 10
    ) {
        media.finalMedia = "APROVADO"
    } else {
        media.finalMedia = "error"
    }

    document.getElementById('response-media').innerHTML = `O Aluno ${media.name} da matria: ${media.class}
    teve media de ${calcMedia(media.mention1, media.mention2, media.mention3)} 
    e por isso foi ${media.finalMedia}`
}

function calcMedia(value1, value2, value3) {
    let val1 = parseFloat(value1);
    let val2 = parseFloat(value2);
    let val3 = parseFloat(value3);

    return ((val1 + val2 + val3) / 3).toFixed(2);
}
