function somarPropriedades(obj) {
  let resultado = 0;
  
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      resultado += obj[prop];
    }
  }
  
  return resultado;
}

console.log(somarPropriedades({a: 1, b: 2, c: 'texto', d: 4})); // Deve retornar 7