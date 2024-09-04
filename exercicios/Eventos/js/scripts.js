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
