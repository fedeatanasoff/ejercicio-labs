// CASOS DE USO
let arrayConPositivos = [2, 7, -1, 9, -3, 0, 4]
let arrayUnPositivo = [2, -7, -1, -9, -3, 0, -4]
let arrayNegativo = [-2, -7, -1, -9, -3, 0, -4]



// FUNCION QUE DEVUELVE LA SUMA DE LOS PRIMEROS DOS NUMEROS DEL ARRAY
// CONTROL PARA CASOS DONDE SOLO HAYA 1 ELEMENTO O NINGUNO
function suma( array ){

    // PRIMERO ORDENO EL ARRAY CON LOS NUMEROS POSITIVOS
    let ordenados = array.sort( (num1, num2) => num1 - num2)

    // FILTRO LOS ELEMENTOS POSITIVOS DEL ARRAY CREANDO UNO NUEVO
    let positivos = ordenados.filter( numero => numero > 0)

    if (positivos.length >= 2) {
        console.log(`sumando ${positivos[0]} + ${positivos[1]}`)
        return positivos[0] + positivos[1]
    } else if (positivos.length === 1) {
        console.log(`solo se encontro 1 solo elemento positivo: ${positivos[0]}`)
        return positivos[0]
    } else {
        console.log(`no se encontraron numeros positivos en el array ingresado`)
        return 0
    }
}

console.log('---- Array con positivos ---')
console.log(suma(arrayConPositivos))
console.log('')
console.log('---- Array con 1 positivo ---')
console.log(suma(arrayUnPositivo))
console.log('')
console.log('---- Array solo negativos ---')
console.log(suma(arrayNegativo))
console.log('')
