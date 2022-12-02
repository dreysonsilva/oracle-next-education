//PROGRAMA IMC 
var nome = prompt("Informe seu nome");
var alturaInformada = prompt(nome+ " informe sua altura?");
var pesoInformado = prompt(nome+ " qual seu peso?");
var imc=pesoInformado / (alturaInformada*alturaInformada);

document.write("sua altura é: "+alturaInformada+"<br>");
document.write("Seu peso: "+pesoInformado+"<br>");
document.write("Olá "+nome+" imc)<br><br>");



//FUNÇÕES ou function
function pulaLinha(){
    document.write("</br></br></br></br>");
}
function soma(numeroUm,numeroDois){
    document.write("A soma do numero 1 + numero Dois = "+(numeroUm+numeroDois));
}

soma(10,20);


var tanque = 40;

var caminhoComGasolina = 480;
var consumoDeGasolina = caminhoComGasolina/tanque;

var caminhoComAlcool = 300;
var consumoDeAlcool = caminhoComAlcool/tanque;

document.write("O consumo de Gasolina é " + consumoDeGasolina + " km/L"+pulaLinha());
document.write("O consumo de Álcool é " + consumoDeAlcool + " km/L");
