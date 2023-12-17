//functions
function calcularIMc (peso, altura){
    imc = peso / (altura*altura);
    return imc;
}

var peso = 55.8;
var altura = 1.59;
var imc

imc = calcularIMc(peso, altura);

console.log('O IMC é: ', imc.toFixed(2));

var pessoa1 = {
    peso:  50.9,
    altura: 1.50
}

var pessoa2 = {
    peso: 80.0,
    altura:  2.0
}

var imcPessoa1 = calcularIMc(pessoa1.peso, pessoa1.altura);

var imcPessoa2 = calcularIMc(pessoa2.peso, pessoa2.altura);

console.log('O imc da primeira pessoa é: ', imcPessoa1.toFixed(2));
console.log('O imc da segunda pessoa é:', imcPessoa2.toFixed(2));

// Arrow function = forma mais 'enxuta' de escrever uma função normal

calcularMedia = (n1,n2) => { media = (n1+n2)/2
    return media
}

var x = 12;
var y = 10;

var resultado = calcularMedia(x,y);

console.log(`A média dos números ${x} e ${y} é ${resultado}`); // ${} serve para não precisar escrever as varáveis fora das aspas.