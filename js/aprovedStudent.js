function aproved() {
    let response = '';
    let aprovedStudent = {
        'name': document.getElementById('studant-aprovad-name').value,
        'mention': document.getElementById('studant-aprovad-mention').value,
        'value' : ''
    }

    if (parseFloat(aprovedStudent.mention) < 4.5) {
        response = 'CONCEITO F';
    }else if (parseFloat(aprovedStudent.mention) >= 4.5 &&parseFloat(aprovedStudent.mention) <= 4.9 ) {
        response = 'CONCEITO D';
    }else if (parseFloat(aprovedStudent.mention) >= 5 &&parseFloat(aprovedStudent.mention) <= 6.9 ) {
        response = 'CONCEITO C';
    }else if (parseFloat(aprovedStudent.mention) >= 7 &&parseFloat(aprovedStudent.mention) <= 8.9 ) {
        response = 'CONCEITO B';
    }else if (parseFloat(aprovedStudent.mention) >= 9 &&parseFloat(aprovedStudent.mention) <= 10 ) {
        response = 'CONCEITO A';
    }else{
        response='error'
    }
  
    aprovedStudent.value =response;


    document.getElementById('response-mension').innerHTML = `O aluno ${aprovedStudent.name} recebeu  \n 
    ${aprovedStudent.value} devido o valor da nota ser ${aprovedStudent.mention}`
}