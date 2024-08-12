class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }
    
    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`)
    }
}
const scania = new Caminhao(6, "Vermelha")

scania.descreverCaminhao()

Caminhao.motor = 4;

const c2 = new Caminhao(4,"Preta")

console.log(c2)

console.log(c2.motor)

Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6,"Azul")

console.log(c3.motor)