const fs = require('fs');

//El Array de la consigna
const arrayDeDatos = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false];

//Función que filtra y escribe en un archivo según el tipo de dato
function filtrarYEscribir(array, condicion) {
  
//Tipos de datos válidos
  const tiposValidos = ['number', 'string', 'boolean'];

//Verifica si la condición es válida
  if (!tiposValidos.includes(condicion)) {
    return console.log("Error: Condición no válida. Debe ser 'number', 'string' o 'boolean'.");
  }

//Filtra el array según el tipo de dato proporcionado por la condición
  let arrayFiltrado = array.filter(item => typeof item === condicion);

//Elimina duplicados y ordena ascendente
    const arrayOrdenado = [...new Set(arrayFiltrado)].sort((a, b) => {
      if (typeof a === 'boolean') return a - b; // Ordena booleanos
      if (typeof a === 'number') return a - b; // Ordena numérico
      return a.toString().localeCompare(b);   // Ordena strings
    });

//Si el array tiene datos, escribirlo en un archivo .txt
  if (arrayOrdenado.length > 0) {
    const contenido = arrayOrdenado.join(', ');
    fs.writeFile('resultado.txt', contenido, (err) => {
      if (err) throw err;
      console.log('El archivo ha sido guardado con éxito con los datos filtrados.');
    });
  } else {
    console.log('El array filtrado está vacío.');
  }
}

//Prueba
const condicion = 'number'; //Tambien puede ser string o boolean segun el Array

filtrarYEscribir(arrayDeDatos, condicion);