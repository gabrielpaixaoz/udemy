function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky);

Cachorro.prototype.uivar = function(){
    console.log("Auuuu!");
}

console.log(Cachorro.prototype);

husky.uivar()

//classes es6

class CachorroClasse{
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff","Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff))