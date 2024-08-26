/* Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
ingresos iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario tiene
que tributar o no
*/
let edad = Number(prompt("Digite su edad"))
let ingresosMensual = Number(prompt("Digite sus ingresos mensuales"))
if (edad > 17 && ingresosMensual >= 1000){
    document.write("Usted tiene que tributar")
}else{
    document.write("Usted no tiene que tributar")
}