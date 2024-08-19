function checkNumber(n){
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor incorreto!")
        return
    }

    console.log("Valor correto!")
    return result
}

try{
    const value = checkNumber("iuhbui")

    if(!value){
        throw new Error("Valores inválidos")
    }
} catch(error){
    console.log(`Opa, aconteceu um problema ${error}`)
} finally{
    console.log(`O código foi executado!`)
}