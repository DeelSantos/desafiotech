// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function sequenciaFibonacci(valor) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;

    for(let i = 0; i < valor; i++) {
        if (num3 === valor){
            return true;
        }
        console.log(num3);
        num1 = num2 + num3;
        num2 = num3;
        num3 = num1;
    }

    return false;
}

let numeroVerificado = 21;

if (sequenciaFibonacci(numeroVerificado)){
    console.log(`${numeroVerificado} é da sequencia de Fibonacci`);
} else {
    console.log(`${numeroVerificado} não é da sequencia de Fibonacci`);
}

