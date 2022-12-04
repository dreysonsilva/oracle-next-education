var segredo =5;
var input =  parseInt(document.querySelector("input"));

function verifica(){
    if(input.value == segredo){
        alert("Acertou");
    }else{
        alert("Você ERROU");
    }
}

var button = document.querySelector("button");


var codigos  = ["IDNOCLIP" , "IDDQD", "IDKFA"];
document.write("Tamanho "+codigos.length);