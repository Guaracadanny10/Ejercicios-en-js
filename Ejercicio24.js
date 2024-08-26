/*. Escribir un programa que almacene la cadena de caracteres contraseña en una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña
introducida por el usuario coincide con la guardada en la variable sin tener en cuenta
mayúsculas y minúsculas. */
const contra = "contrasena"
let contra2 = String(prompt("Escriba su contrasena"))
if (contra.toLowerCase() === contra2.toLowerCase()){
    document.write("La contrasena coincide con la variable ")
}