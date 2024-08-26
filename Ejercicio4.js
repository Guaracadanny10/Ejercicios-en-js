//Utiliza un if para verificar si un número es positivo, negativo o cero e imprime el resultado
let numero1 = Number(prompt("Escribe un numero")) //No olvide agregar una etiqueta script en html para mostrar por pantalla ya que dice básico y esto es js para sitios web
if (numero1 > 0){
    console.log("Es positivo") // El resultado saldra en la consola no por pantalla
}else if(numero1 < 0){
console.log("Es negativo")
}else{
    console.log("Es cero")
}