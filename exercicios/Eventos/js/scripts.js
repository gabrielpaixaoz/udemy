//1 = adicionando eventos

const btn = document.querySelector("#my-button")

btn.addEventListener("click",function(){
    console.log("Clicou aqui!")
})


//2 - revmoento evento

const secondBtn = document.querySelector('#btn')
const otherBtn = document.querySelector('#other-btn')

function imprimirMensage(){
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensage)

otherBtn.addEventListener("click", () =>{
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensage)
})


//3 - argumento do evento

const mytitle = document.querySelector("#my-title")

mytitle.addEventListener("click", (event) =>{
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})


//4 - PROPAGAÇAO


const containerBTN = document.querySelector("#btn-container")

const btnInsideContainer = document.querySelector("#div-btn")


containerBTN.addEventListener("click",()=>{
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log("Evento 2")
})

//5 - removendo evento padrao


const a = document.querySelector("a")

a.addEventListener("click", (e) =>{
    e.preventDefault();

    console.log("Não alterou a página")
})

//6 - eventos de tecla

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})


document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})

//7- eventos de mouse

const mouseEvents = document.querySelector('#mouse')

mouseEvents.addEventListener("mousedown", () =>{
    console.log("Pressionou")
})

mouseEvents.addEventListener("mouseup", () =>{
    console.log("Soltou")
})

mouseEvents.addEventListener("dblclick", () =>{
    console.log("clique duplo")
})


// 8 - movimento do mouse

document.addEventListener("mousemove", (e) =>{
    //console.log(`No eixo X: ${e.x}`)
    //console.log(`No eixo Y: ${e.y}`)
}) 