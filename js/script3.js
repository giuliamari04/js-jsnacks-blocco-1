const ArrayNum1 =[];
const ArrayNum2=[];


risultato1 = document.getElementById('array1-after');
risultato2 = document.getElementById('array2-after');
risultato3 = document.getElementById('sommaArray');



    for(let i=0; i< 10 ; i++){
        let randNum = getRndInteger(0,100);
        ArrayNum1.push(randNum);
     }
     console.log(ArrayNum1);

     for(let c=0; c< 4 ; c++){
        let randNum = getRndInteger(0,100);
        ArrayNum2.push(randNum);
     }
     console.log(ArrayNum2);

      risultato1.innerHTML = `
         ecco il tuo primo Array : ${ArrayNum1}     
      `;

      risultato2.innerHTML = `
      ecco il tuo secondo Array : ${ArrayNum2}     
   `;

   
  

   if(ArrayNum1.length > ArrayNum2.length){
    let diff = ArrayNum1.length - ArrayNum2.length;
        for(let i =0; i< diff;i++){
        let randNum = getRndInteger(0,100);
        ArrayNum2.push(randNum);
        }
         console.log(ArrayNum2)
         risultato3.innerHTML = `
         ecco la somma dei tuoi array Array : ${ArrayNum2}     
      `;
    }else{
        let diff = ArrayNum2.length - ArrayNum1.length;
        for(let i =0; i< diff;i++){
            let randNum = getRndInteger(0,100);
            ArrayNum1.push(randNum);
            }
             console.log(ArrayNum1)
             risultato3.innerHTML = `
         ecco la somma dei tuoi array Array : ${ArrayNum1}     
      `;
    }

    
  

