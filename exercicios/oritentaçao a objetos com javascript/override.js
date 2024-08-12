class Humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        }
}

const matheus = new Humano("Matheus", 31)

console.log(matheus)

console.log(Humano.prototype.idade)

Humano.prototype.idade = "Não definida"

console.log(matheus.idade)

console.log(Humano.prototype.idade)