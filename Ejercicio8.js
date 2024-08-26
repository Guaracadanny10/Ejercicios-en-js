/*Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
años que ha cumplido (desde 1 hasta su edad).*/
let i = 1
let edad = Number(prompt("Ingrese su edad"))
document.write("Todos los año que usted a cumplido desde su nacimiento",)
while (i<=edad){
    document.write ('<br>' + i + '<br>')//Ojo este código mostrara por pantalla no por consola 
    i++
}