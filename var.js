// variables
const nome = 'Maria Eduarda', sobrenome = 'Rocha Silva'; // const não pode ser mudada;
var idade, peso;
var maiordeidade;
var fichaCriminal;
var listaDeNomesSuspeitos;

idade = 18;
maiordeidade = true;
peso = 55.9;

fichaCriminal = {
    nome,
    sobrenome,
    idade,
    maiordeidade,
    peso,
    corDoCabelo: 'Castanho'
}
listaDeNomesSuspeitos = ['Ana', 'João', 'Marcos', 'Pedro', 'Duda'];

listaDeCarrosSuspeitos = [{
    placa: 'AG85I9',
    modelo: 'Ferrari',
    ano: '2022',
    cor: 'Preto'
}, {
    placa: 'AJI857',
    modelo: 'Jeep',
    ano: '2013',
    cor: 'Cinza'
}, {
    placa: 'OJ8WT25',
    modelo: 'Fusca',
    ano: '2012',
    cor: 'Vermelho'
}
]


console.log('Nome do usuário: ', nome);
console.log('Sobrenome do usuário: ', sobrenome);
console.log('Idade do usuário: ', idade);
console.log('O usuário é maior de idade? ', maiordeidade);
console.log('Qual é o peso em kg do usuário: ', peso);
console.log('*************************************************');
console.log('FICHA CRIMINAL');
console.log(fichaCriminal);
console.log('**************************************************');
console.log('LISTA DE NOMES SUSPEITOS:');
console.log(listaDeNomesSuspeitos);
console.log('**************************************************');
console.log('LISTA DE CARROS SUSPEITOS');
console.log(listaDeCarrosSuspeitos);