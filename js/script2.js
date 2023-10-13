const ArrayNum =[];

bottone = document.getElementById('button');
risultato = document.getElementById('risultatoNum');


bottone.addEventListener('click', function(){
    const input = document.getElementById('numero').value;
    console.log(input);
    for(let i=0; i< input ; i++){
        let randNum = getRndInteger(0,100);
        ArrayNum.push(randNum);
     }
     console.log(ArrayNum);
     risultato.innerHTML = `
        ecco il tuo Array : ${ArrayNum}     
     `;
});





