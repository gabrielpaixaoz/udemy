// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.childNodes[1])

console.log(document.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

//2 - selecionadno os elementos por CSS



const products = document.querySelectorAll(".product")

console.log(products)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)