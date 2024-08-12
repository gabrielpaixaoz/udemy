class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas,patas)
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark)

console.log(shark.patas)