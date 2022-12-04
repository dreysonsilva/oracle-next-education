var loginCadastrado = "dreyson";
var senhaCadastrada = "dreyson";
var maximoTentativas=3;
var tentativaAtual=1;

while(tentativaAtual<=maximoTentativas){
    var loginInformado = prompt("Informe seu login");
    var SenhaInformada = prompt("Informe sua senha");

    if(loginCadastrado==loginCadastrado && senhaCadastrada == SenhaInformada){
        document.write("Bem vindo ao sistema: "+loginInformado);
    }else if(tentativaAtual==3){
        document.write("numero permitido de tentativas ultrapassado");
    }else{
        alert("Login inválido. Tente novamente");
    }
    tentativaAtual=tentativaAtual+1;
}

//Realizando o tratamento caso usuário digite um text ao invés de um número.
var idade = parseInt(prompt("Digite sua idade"));
while(idade==NaN){
    var idade = parseInt(prompt("Digite sua idade"));
}
documentWrite(idade);

var idade2 = parseInt(prompt("Digite sua idade"));
while(isNaN(idade2)){
    idade = parseInt(prompt("Digite sua idade"));
}
alert(idade2);
