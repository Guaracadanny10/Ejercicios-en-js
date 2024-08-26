// Ejercicio 1 Declara una variable llamada nombre y asígnale tu nombre como valor.
let nombre = "Danny"
console.log(nombre)

//Ejercicio2. Crea una variable llamada edad y asígnale tu edad.
let edad1 = 18 
console.log(edad1)

// Ejercicio 3 Declara una variable ‘esEstudiante’ y asígnale un valor booleano.
let esEstudiante = true
console.log(esEstudiante)

// Ejercicio 4 Utiliza un if para verificar si un número es positivo, negativo o cero e imprime el resultado
let numero1 = Number(prompt("Escribe un numero")) //No olvide agregar una etiqueta script en html para mostrar por pantalla ya que dice básico y esto es js para sitios web
if (numero1 > 0){
    console.log("Es positivo") // El resultado saldra en la consola no por pantalla
}else if(numero1 < 0){
console.log("Es negativo")
}else{
    console.log("Es cero")
}

// Ejercicio 5 Declara una variable hobbies que contenga un array con tus hobbies.
let hobbies = ['Comer','Dormir','Pasear al perro','Ver videos','Jugar Videojuegos']
console.log(hobbies)

// Ejercicio 6 Crea un objeto persona que contenga tres propiedades: nombre, edad y esEstudiante.
const persona = {
    nombre : 'Danny',
    edad : 19 ,
    esEstudiante : true
}
console.log(persona)

// Ejercicio 7 Declara una variable nullVar y asígnale el valor null.
let nullVar = null
console.log(nullVar)

/* Ejercicio 8 : Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
años que ha cumplido (desde 1 hasta su edad).*/
let i = 1
let edad = Number(prompt("Ingrese su edad"))
document.write("Todos los año que usted a cumplido desde su nacimiento",)
while (i<=edad){
    document.write ('<br>' + i + '<br>')//Ojo este código mostrara por pantalla no por consola 
    i++
}

// Ejercicio 9 Declara una variable numeroHex que contenga un número hexadecimal.
let numeroHex = 0x1A3F //Está es una funcion que muestre dichos números
console.log(numeroHex)//Imprimiendo por consola

// EJERCICIO 10 :Crea una variable nombreCompleto que concatene tu nombre y tu apellido.
let nombre1 = "Danny"
let apellido = "Guaraca"
let nombreCompleto = nombre + apellido
console.log(nombreCompleto)

// EKERCICIOS 11 :Suma dos números y almacena el resultado en una variable suma.
let numeroOne = 10 
let numeroTwo= 20 
let suma = numeroOne+ numeroTwo
console.log(suma)

// EJERCICIOS 12 :Resta dos números y guarda el resultado en una variable resta.
let numeroUno = 10 ; let numeroDos =20 
let resta = numeroDos-numeroUno
console.log(resta)

// EJERCICIOS 13 : Multiplica dos números y asigna el resultado a una variable multiplicacion.
let numero11 = 20 ; let numero22 = 40 
let multiplicacion = numero11 * numero22
console.log(multiplicacion)

//Ejercicios 14. Divide dos números y almacena el resultado en una variable division.
let num1s = 30 ; let num2s = 10
let division = num1s/num2s
console.log(division)

/* Ejercicios 15 :Usa el operador de módulo para encontrar el residuo de 10 dividido por 3 y almacena
el resultado en una variable modulo.*/
let modulo = 10 % 3
console.log(modulo)

// Ejercicio 16 : Incrementa el valor de una variable contador en 1 usando el operador de incremento.
//Digamos que tenemos una varible contador esta debe estar inicializada y declarada en o y el operador es i++ o i=i+1 
let contador = 0
contador++
console.log("Este es el incremento " + contador)

/*  Ejercicio 17 : Decrementa el valor de una variable contadorDec en 1 usando el operador de
decremento*/
//Decremento significa que este contador se vaya a reducir 
let contadorDec = 10
contadorDec--
console.log("Este es el decremento de la variable " + contadorDec)

//. Ejercicio 18 : Crea una lista con al menos 5 elementos y luego imprime toda la lista
var lista = ["Agua","Tierra","Fuego","Luz","Viento"]
console.log(lista)

// Ejercicio 19 : Verifica si un valor está presente en una lista
let lista = ['19','Arroz','Mantequilla','Pollo'] //Para  verficar si está en nuestra lista debemos imprimir por consola con includes(y aqui va un valor )
console.log(lista.includes('19'))

//Ejercicio 20 :Añade un elemento al final de la lista y otro en una posición específica.
let lista = ['Elemento1','Elemento2','Elemento3']
lista.push("Elementofinal")
lista.splice(2, 0, 'Elementoposicion2')
console.log(lista)

// Ejercicio 21 : Elimina un elemento de la lista por su valor y otro por su índice.
let lista = ['elemento1','elemento2','elemento3','elemento4']
console.log(delete lista["elemento1"])//Se eliminara solo el valor que pusimos y nos saldra true
console.log(lista.splice(2 ,0 ))//El .splice nos ayuda a eliminar una elemento de nuestra matriz por medio de su índice (Cordinadas)

/*Ejercicio 22 :Compara dos números para ver si son iguales y almacena el resultado (booleano) en
una variable sonIguales.*/
let num10= 10 ; let num20 = 10
let sonIguales = num10 == num20
console.log("¿Son iguales?" ,sonIguales)

/*Ejercicio 23 : Comprueba si un número es mayor que otro y guarda el resultado (booleano) en una
variable esMayor*/
let num1 = 10 ; let num2 = 20
let esMayor = num2 > num1
console.log(esMayor)

/*.  Ejercicio 24 : Escribir un programa que almacene la cadena de caracteres contraseña en una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña
introducida por el usuario coincide con la guardada en la variable sin tener en cuenta
mayúsculas y minúsculas. */
const contra = "contrasena"
let contra2 = String(prompt("Escriba su contrasena"))
if (contra.toLowerCase() === contra2.toLowerCase()){
    document.write("La contrasena coincide con la variable ")
}

/* Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene
que tributar o no
*/
let edadOne = Number(prompt("Digite su edad"))
let ingresosMensual = Number(prompt("Digite sus ingresos mensuales"))
if (edadOne > 17 && ingresosMensual >= 1000){
    document.write("Usted tiene que tributar")
}else{
    document.write("Usted no tiene que tributar")
}