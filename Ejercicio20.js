//Añade un elemento al final de la lista y otro en una posición específica.
let lista = ['Elemento1','Elemento2','Elemento3']
lista.push("Elementofinal")
lista.splice(2, 0, 'Elementoposicion2')
console.log(lista)