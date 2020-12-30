// LISTA DE VEHICULOS

const vehiculos = [
  {
    marca: 'Peugeot',
    modelo: '206',
    puertas: 4,
    precio: 200000.0,
  },
  {
    marca: 'Honda',
    modelo: 'Titan',
    cilindrada: '125cc',
    precio: 60000.0,
  },
  {
    marca: 'Peugeot',
    modelo: '208',
    puertas: 5,
    precio: 250000.0,
  },
  {
    marca: 'Yamaha',
    modelo: 'YBR',
    cilindrada: '160cc',
    precio: 80500.5,
  },
];

// FUNCION PARA CONVERTIR PRIMERA LETRA DE STRING EN MAYÚSCULAS
function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// FUNCION PARA OBTENER VEHICULO MAS CARO
function masCaro(listaVehiculos) {
  let precioVehiculo = Math.max(
    ...listaVehiculos.map((vehiculo) => vehiculo.precio)
  );
  let vehiculoMasCaro = listaVehiculos.filter(
    (vehiculo) => Object.values(vehiculo)[3] === precioVehiculo
  );
  return vehiculoMasCaro[0].marca + ' ' + vehiculoMasCaro[0].modelo;
}

//FUNCION PARA OBTENER VEHICULO MAS BARATO
function masBarato(listaVehiculos) {
  let precioVehiculo = Math.min(
    ...listaVehiculos.map((vehiculo) => vehiculo.precio)
  );
  let vehiculoMasCaro = listaVehiculos.filter(
    (vehiculo) => Object.values(vehiculo)[3] === precioVehiculo
  );
  return vehiculoMasCaro[0].marca + ' ' + vehiculoMasCaro[0].modelo;
}

//FUNCION PARA OBTENER MODELO CON LETRA 'Y'
function modeloLetraY(listaVehiculos) {
  let regex = /[Y]\w+/g;
  let modeloConY = listaVehiculos.filter((vehiculo) =>
    regex.test(vehiculo['modelo'])
  );
  return (
    modeloConY[0].marca +
    ' ' +
    modeloConY[0].modelo +
    ' $' +
    modeloConY[0].precio.toFixed(2)
  );
}

// FUNCION PARA ORDENAR VEHICULOS DE MAYOR A MENOR PRECIO
function precioMayorAMenor(listaVehiculos) {
  let listaOrdenada = listaVehiculos.sort((a, b) => b.precio - a.precio);
  let printLista = '';
  for (let vehiculo of listaOrdenada) {
    printLista += `
    ${vehiculo['marca']} ${vehiculo['modelo']}`;
  }
  return printLista;
}

// FUNCION PRINTER DEL EJERCICIO
function detalleVehiculos(listaVehiculos) {
  let printConsola = '';
  for (let vehiculo of listaVehiculos) {
    printConsola += `${toCapitalize(Object.keys(vehiculo)[0])}: ${
      vehiculo.marca
    } // ${toCapitalize(Object.keys(vehiculo)[1])}: ${
      vehiculo.modelo
    } // ${toCapitalize(Object.keys(vehiculo)[2])}: ${
      Object.values(vehiculo)[2]
    } // ${toCapitalize(Object.keys(vehiculo)[3])}: $${vehiculo.precio.toFixed(
      2
    )}
    `;
  }
  printConsola += '=============================';
  printConsola += `
    Vehículo más caro: ${masCaro(listaVehiculos)}
    Vehículo más barato: ${masBarato(listaVehiculos)}
    Vehiculo que contiene en el modelo la letra 'Y': ${modeloLetraY(
      listaVehiculos
    )}
    `;
  printConsola += '=============================';
  printConsola += `
    Vehículos ordenados por precio de mayor a menor: ${precioMayorAMenor(
      listaVehiculos
    )}`;

  console.log(printConsola);
}
