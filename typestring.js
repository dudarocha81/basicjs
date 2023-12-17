/*\métodos de strings: 
length = Tamanho de string
indexOf = buscar a posição de um caracter na string
search = pesquisar um caracger na string
slice/substring = Extrair uma parte da string
replace = substituir um termo por outro
UppperCase = caixa alta
lowecase= caixa baixa 
Trim = Tira espaços em brancos da string
chatAT = Mostra a posição da string*/

/*
let texto = "   Exemplo de Texto para Desenvolvimento em JavaScript   "; 
Utilizando o método apropriado, remova os espaços em branco desnecessários no início e no final da string.
Determine o comprimento da string após a remoção dos espaços em branco.
Extraia a palavra "Exemplo" da string.
Substitua a palavra "JavaScript" por "TypeScript" na string.
Verifique se a palavra "desenvolvimento" está presente na string e retorne sua posição. */

const texto = " Exemplo de Texto para Desenvolvimento em JavaScript ";
console.log('A string sem espaço em branco fica: ', texto.trim());
console.log('A O comprimento da string é: ', texto.length);
console.log('A mensagem fica: ', texto.slice(8, 54));
console.log('Substituindo fica: ', texto.replace('JavaScript', 'TypeScript'));
console.log('a palavra "desenvolvimento" está no indice: ', texto.indexOf('Desenvolvimento'));
console.log('A mensagem em caixa alta fica: ', texto.toUpperCase());
console.log('A mensagem em caixa baixa fica: ', texto.toLowerCase());

