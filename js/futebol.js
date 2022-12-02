function escreve(texto){ //método escrever que recebe um texto
    document.write(texto);
}

var vitorias = parseInt(prompt("Entre com o número de vitórias"));

var empates = parseInt(prompt("Entre com o número de empates"));

var pontos = vitorias * 3  + empates;

escreve("Os pontos do seu time é: "+pontos);

if(pontos>28){
    escreve("<br>Seu time está melhor do que o ano passado.");
}
if(pontos<28){
    escreve("<br>Seu time está pior que o ano passado.");
}

if(pontos==29){
    escreve("<br>Seu time está igual ao ano passado.");
}
