Promise.resolve(4 * "asd")
.then((n) =>{
    if (Number.isNaN(n)) {
        throw new Error("Valores inválidos")
    }
}).catch((err) => console.log(`Um erro ocorreu: ${err}`))