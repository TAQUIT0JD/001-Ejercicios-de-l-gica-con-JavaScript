let n = prompt('Ingrese el número de horas que estuvo estacionado: ');
if (n<.5) {
    console.log('No se cobrara nada.');
} else if (n>.5 && n<2) {
    console.log('La cantidad a pagar es de 10 pesos.');
} else if (n>2 && n<3) {
    console.log('La cantidad a pagar es de 25 pesos.');
} else if (n>3) {
    console.log('La cantidad a pagar es de 30 pesos.');
}