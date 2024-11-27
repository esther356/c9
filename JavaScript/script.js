function calcularTotalMonedas(n) {
    if (n <= 0) {
        return 0;
    }
    const total = (n * (n + 1)) / 2;
    return total;
}

function calcular() {
    const filasInput = document.getElementById('filasInput');
    const resultado = document.getElementById('resultado');
    const filas = parseInt(filasInput.value);
    
    if (!isNaN(filas) && filas > 0) {
        const totalMonedas = calcularTotalMonedas(filas);
        resultado.textContent = 'Para construir una pirámide con ' + filas + ' filas, se necesitan ' + totalMonedas + ' monedas.';
    } else {
        resultado.textContent = 'Por favor, introduce un número válido de filas.';
    }
}