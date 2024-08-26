//Elimina un elemento de la lista por su valor y otro por su índice.
let lista = ['elemento1','elemento2','elemento3','elemento4']
console.log(delete lista["elemento1"])//Se eliminara solo el valor que pusimos y nos saldra true
console.log(lista.splice(2 ,0 ))//El .splice nos ayuda a eliminar una elemento de nuestra matriz por medio de su índice (Cordinadas)
