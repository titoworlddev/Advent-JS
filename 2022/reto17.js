function carryGifts(gifts, maxWeight) {
  if (!gifts.every((gift) => maxWeight >= gift.length)) {
    return [];
  }
  /* Por cada regalo si no sobre pasa el peso 
  sumando con el que hay lo agregamos 
  si lo sobrepasa agregamos otro saco y el regalo dentro */
  let sacos = [''];
  gifts.forEach((el) => {
    sacos[sacos.length - 1] = sacos[sacos.length - 1].trim();
    const previousWeight = sacos.at(-1).replace(/ /g, '').length;
    previousWeight + el.length <= maxWeight
      ? (sacos[sacos.length - 1] += ' ' + el)
      : sacos.push(el);
  });
  return sacos;
}

// Estamos preparando los sacos para los regalos de Navidad pero cada saco tiene un límite de peso.

// Nos dan un array con los nombres de los regalos y un número que es el peso máximo que puede llevar cada saco. El peso de cada regalo es la longitud de su nombre.

// Escribe una función que agrupe los regalos en sacos y devuelva un array con los nombres de los regalos de cada saco. Para agrupar los regalos, se separan los nombres por espacios (el espacio no cuenta como peso).

// ¡Pero ojo! Cada saco puede llevar un máximo de peso, y si el peso de los regalos de un saco supera el peso máximo, se debe separar el último regalo del saco y ponerlo en el siguiente saco.

console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 9));
// Debería ser: ['toy toy toy', 'toy']

// carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

// carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

// carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

// carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro

// Ten en cuenta:
// Los regalos siempre se agrupan por orden de aparición en el array.
// No puedes cambiar el orden de los regalos en el array a la hora de agruparlos.
// Se pueden agrupar todos los regalos en un solo saco.
// Si no se puede agrupar ningún regalo en un saco, se devuelve un array vacío.
