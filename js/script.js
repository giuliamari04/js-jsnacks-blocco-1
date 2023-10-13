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
const lista = document.getElementById('ingredienti');
const risp = document.getElementById('risposta');
let listEl='';

ingredienti.push('pesca');

for(let i=0; i < ingredienti.length;i++){
    console.log(ingredienti[i]);
    listEl += ingredienti[i] +' ';
    
    if(ingredienti[i] ==='cocomero'){
       presente = true;
    }else{
        i++;
    }
}
lista.innerHTML = `
    ${listEl}
`;

if(presente === true){
    console.log('facciamolo');
    risp.innerText = 'Trovato! Devo solo preparare i cocktail';

}else{
    console.log('spesa');
    risp.innerText = 'Oh no, devo uscire a comprare il cocomero!';
}