// * sets o conjuntos => son arreglos no ordenados de objetos unicos
const lst =  [2, 1, 2, 3, 4, 5, 6, 4, 7, 9, { id: 5 }, { id: 5 }];

const setLista = new Set(lst);

console.log(lst);
console.log(setLista);

// .add() adicionar valores a un set
setLista.add(11);

// .delete() eliminar valores
setLista.delete(5);
console.log(setLista);

// vaciar el set
// setLista.clear();

// has => para buscar un elemento
console.log(setLista.has(4));
console.log(setLista.has(40));

// propiedad size
console.log(setLista.size);

const itSet = setLista.values();
console.log(itSet);


const lstSet = [...setLista]
console.log(lstSet);
