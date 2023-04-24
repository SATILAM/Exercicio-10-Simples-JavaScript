# Exercício-10-Simples-JavaScript.

Praticando uma function simples JavaScript.

Este código é uma função chamada somarPropriedades que recebe um objeto como parâmetro. 

A função percorre as propriedades desse objeto e soma o valor de todas as propriedades cujos valores são do tipo number.

A variável resultado é inicializada com o valor 0. A seguir, a função percorre cada propriedade do objeto usando um laço for..in. 

A verificação é realizada para cada propriedade do objeto usando a condição if (typeof obj[prop] === 'number'), 

que verifica se o tipo do valor da propriedade é number. Se essa condição for verdadeira, o valor da propriedade é adicionado à variável resultado.

O valor de resultado é retornado. A função somarPropriedades, o valor de a é 1, o valor de b é 2, o valor de c é uma string 'texto' e o valor de d é 4.

A função soma apenas os valores numéricos, portanto, o resultado da chamada da função somarPropriedades passando o objeto {a: 1, b: 2, c: 'texto', d: 4} 
como parâmetro é 7 (1 + 2 + 4).
