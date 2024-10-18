let c;
let p = prompt('Ingrese una palabra: ');
c=p.split('').reverse().join('');
if (p==c) {
    console.log('La palabra'+p+' es un palíndromo.');
} else {
    console.log('La palabra '+p+' no es un palíndromo.');
}