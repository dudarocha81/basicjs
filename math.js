//math operations
var x, y, resultado;
var peso, altura, imc;
const primeiroNome= 'Maria', segundoNome = 'Eduarda';

x = 3;
y = 4;
peso = 55.8;
altura = 1.59;

resultado = x + y;
console.log('Soma :', resultado);

resultado = x-y;
console.log('Subtração :', resultado);

resultado = x*y;
console.log('Multiplicação :', resultado);

resultado = x/y;
console.log('Divisão :', resultado);

resultado = x %y;
console.log('O resto é:', resultado);

imc = peso / (altura*altura);
imc = imc.toFixed(2);
console.log('O imc é: ', imc);

console.log('O meu nome é: ', primeiroNome + ' ' +  segundoNome);