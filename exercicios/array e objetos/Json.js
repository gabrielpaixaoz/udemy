const myJson = '{"name": "Matheus", "age": 31, "skills": ["PHP", "Javascript","Python"]}'

console.log(myJson)

console.log(typeof myJson)

// Json para objeto e objeto para JSON

const myObject = JSON.parse(myJson);

console.log(myObject)

console.log(myObject.name);

console.log(typeof myObject);

//json invalido

const badJson = '{"name": Matheus, "age" : 31}';

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)