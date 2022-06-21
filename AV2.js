let rs= require("readline-sync")
let lista= [];
let quantidadelista=lista.length;


for (i=0; i<100;i++){

    let idade=rs.question("Qual a sua idade ? ");
  
    let idadepermit= idade>=18? "Cadastro permitido  " : "Somente maiores de 18 podem se cadastrar"
    console.log (idadepermit);
    if (idade < 18) {
        console.log("nao permitido");
        continue;
      }

let nome = rs.question("qual seu nome ?");
lista.push(nome);}      


console.log(lista);
console.log(lista.length);
