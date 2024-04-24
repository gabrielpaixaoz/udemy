//1 - push e pop

/*
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z","x","y");

console.log(array)

*/

//12 - shift e unshift

/*
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p","q","r");

letters.unshift("z");

console.log(letters)*/

//13 - indexOf e lastIndexOf

/*
const myElements = ["Morango","Maçã","Abacate","Pêra","Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));

console.log(myElements.lastIndexOf("Mamão"));

o valor será -1 caso o index não exista  


//14 - slice

const testeSlice = ["a","b","c","d","e","f",]

const subArray = testeSlice.slice(2,4)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2)

console.log(subArray4) */

const nums = [1, 2 , 3, 4, 5]

nums.forEach((numero)=>{
    console.log(`O número é ${numero}`)
})

const posts = [
    { title: "Primeiro post", category: "PHP"},
    { title: "Segundo post" , category: "Javascript"},
    { title: "Terceiro post", category: "Python"}
]

posts.forEach((post)=>{
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})