let n1 = prompt('Ingrese un número: ');
let n2 = prompt('Ingrese otro número: ');
if (n1>n2) {
    console.log('El número '+n1+' es mayor que '+n2);
} else if (n1==n2) {
    console.log('Los dos números son iguales.')
} else {
    console.log('El número '+n2+' es mayor que '+n1);
}