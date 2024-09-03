// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.childNodes[1])

console.log(document.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

//2 - selecionadno os elementos por CSS


//3 - Query selector All
const products = document.querySelectorAll(".product")

console.log(products)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)

//4 - Insert Before

const p = document.createElement("p")

const header = title.parentElement;

header.insertBefore(p, title)


//5 - Método appendChild

const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// 8 - replaceChild

const h2 = document.createElement("h2")

h2.textContent = "meu novo titulo!"

header.replaceChild(h2, title)

//9 - createTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)


//10 - alterando atributos 


const FirstLink = navLinks.querySelector("a")


console.log(FirstLink)


FirstLink.setAttribute("href","https://www.google.com")

console.log(FirstLink.getAttribute("href"))

FirstLink.setAttribute("target","_blank")


// 11 - altura e largura

const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
// desconsiderando a borda
console.log(footer.clientHeight)


//12 - posicao do elemento

const product1 = products[0]

console.log(product1.getBoundingClientRect())


//13 - Css com JS

mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "20px"

//14 - alterando estilos de varios elementos


const listItens = document.querySelectorAll("li")
for(const li of listItens){
    li.style.backgroundColor = "red"
}