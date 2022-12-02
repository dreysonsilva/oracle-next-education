var numeroPensado = Math.round(Math.random()*10);

var chute = parseInt(prompt("Digite seu chute"));

if(chute == numeroPensado){
    document.write("Você acertou! | ");
    document.write("Numero pensado: "+numeroPensado);
}
else{
    document.write("Você errou | ");
    document.write("Numero pensado: "+numeroPensado);
}