const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function () {
        //coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);
        // comparar o resultado
        expect(resultadoDaSoma).to.equal(8);
    }); 
    it('A função deve ser capaz de somar um número positivo e um número negativo', function () {
        //coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -15);
        // comparar o resultado
        expect(resultadoDaSoma).to.equal(35);
    }); 
});
