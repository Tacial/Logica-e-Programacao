function somarDoisNumeros (valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    // soma 
    const resultadoDaSomaDeDoisNumeros = somarDoisNumeros(valor1, valor2);
    // dividir
    const  resultadoDaMedia = resultadoDaSomaDeDoisNumeros / 2;
    // retornar
    return resultadoDaMedia
}

module.exports = {
    somarDoisNumeros
}