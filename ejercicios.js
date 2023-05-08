/*1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)

3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar

4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad

5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120

6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares

8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.*/

// Function for 1
function ejercicio1() {
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let edadProx = parseInt(edad) + 1;
    console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edadProx} años`);
}

// Function for 2
function ejercicio2() {
    let figura = prompt("Ingrese la figura a la que desea calcular el área");
    let base = prompt("Ingrese la base");
    let altura = prompt("Ingrese la altura");
    let radio = prompt("Ingrese el radio");
    let area = 0;
    switch (figura) {
        case "triangulo":
            area = (base * altura) / 2;
            console.log(`El área del triángulo es ${area}`);
            break;
        case "rectangulo":
            area = base * altura;
            console.log(`El área del rectángulo es ${area}`);
            break;
        case "circulo":
            area = Math.PI * Math.pow(radio, 2);
            console.log(`El área del círculo es ${area}`);
            break;
        default:
            console.log("La figura ingresada no es válida");
            break;
    }
}

// Function for 3
function ejercicio3() {
    let num = prompt("Ingrese un número");
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(`${i} - es par`);
        } else {
            console.log(`${i} - es impar`);
        }
    }
}

// Function for 4
function ejercicio4() {
    let num = prompt("Ingrese un número");
    let cont = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            cont++;
        }
    }
    if (cont > 0) {
        console.log("El número no es primo");
    } else {
        console.log("El número es primo");
    }
}

// Function for 5
function ejercicio5() {
    let num = prompt("Ingrese un número");
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`El factorial de ${num} es ${fact}`);
}

// Function for 6
function ejercicio6() {
    let num = 0;
    let suma = 0;
    let cont = 0;
    while (suma <= 50) {
        num = prompt("Ingrese un número");
        suma += parseInt(num);
        cont++;
    }
    console.log(`El total acumulado es ${suma} y se ingresaron ${cont} números`);
}

// Function for 7
function ejercicio7() {
    let arr = [1, 2, 3, 4, 5];
    let pares = [];
    let impares = [];
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = Math.floor(Math.random() * 10) + 1;
        console.log(`${arr[i]} x ${num} = ${arr[i] * num}`);
        if ((arr[i] * num) % 2 == 0) {
            pares.push(arr[i] * num);
        } else {
            impares.push(arr[i] * num);
        }
    }
    console.log(`Array de pares: ${pares}`);
    console.log(`Array de impares: ${impares}`);
}

// Function for 8
function ejercicio8() {
    let letras = [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E",
        "T",
    ];
    let dni = prompt("Ingrese su DNI");
    if (dni.length > 8 || dni < 0) {
        console.log("El número ingresado no es válido");
    } else {
        console.log(`Su DNI completo es ${dni}${letras[dni % 23]}`);
    }
}

// Function for 9
function ejercicio9() {
    let palabra = prompt("Ingrese una palabra");
    let vocales = 0;
    let consonantes = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (
            palabra[i] == "a" ||
            palabra[i] == "e" ||
            palabra[i] == "i" ||
            palabra[i] == "o" ||
            palabra[i] == "u"
        ) {
            vocales++;
        } else {
            consonantes++;
        }
    }
    console.log(`La palabra ingresada tiene ${vocales} vocales y ${consonantes} consonantes`);
}

// Function for 10
function ejercicio10() {
    let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
    let color = prompt("Ingrese un color");
    let existe = false;
    for (let i = 0; i < colores.length; i++) {
        if (color == colores[i]) {
            existe = true;
        }
    }
    if (existe) {
        console.log("El color ingresado existe en el array");
    } else {
        console.log("El color ingresado no existe en el array");
    }
}


