// Escreva um programa que troque e reverta os caracteres de uma string
function inverterString(string) {
    let stringInvertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }
    return stringInvertida;
}

const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
