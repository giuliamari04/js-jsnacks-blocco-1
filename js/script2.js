const ArrayNum =[];
const Array5Num=[];

bottone = document.getElementById('button');
risultato = document.getElementById('risultatoNum');


bottone.addEventListener('click', function(){
    const input = document.getElementById('numero').value;
    console.log(input);
    if(input<=5){
        risultato.innerHTML=`
         il numero inserito è trppo basso
        `;
    }else{
    for(let i=0; i< input ; i++){
        let randNum = getRndInteger(0,100);
        ArrayNum.push(randNum);
     }
     console.log(ArrayNum);

     for(let j = ArrayNum.length-5;j <= ArrayNum.length - 1;j++){
        Array5Num.push(ArrayNum[j]);
        
     }
     console.log(Array5Num);
      risultato.innerHTML = `
         ecco gli ultimi 5 numeri del tuo Array : ${Array5Num}     
      `;
    }
});





