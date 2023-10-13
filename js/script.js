const ingredienti =[
    'banana', 
    'mela', 
    'pera', 
    'ciliegia',
     'arancia', 
     'mandarino', 
     'cocomero', 
     'limone',
      'fragola'   
];

let presente = false;

ingredienti.push('pesca');

for(let i=0; i < ingredienti.length;i++){
    console.log(ingredienti[i]);

    if(ingredienti[i] ==='cocomero'){
       presente = true;
    }else{
        i++;
    }
}

if(presente === true){
    console.log('facciamolo');

}else{
    console.log('spesa');
}