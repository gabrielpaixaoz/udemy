const promessa = Promise.resolve(5 + 5)

console.log("aLGUM codigo")

promessa.then((value) =>{
    console.log(`A soma é ${value}`)
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`))

console.log("Outro código")