let num;

num = prompt('Ingrese un numero entero');
num = parseInt(num);

if (num == 0) {
    document.write('El número ingresado es cero');
} else {
    if (num > 0) {
        document.write('El número ingresado es positivo');
    } else {
        document.write('El número ingresado es negativo');
    }
}