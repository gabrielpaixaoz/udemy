const somaInfinita = (...args) =>{
    let total = 0;

    for (let i = 0; i< args.length; i++){
        total += args[i];
    }

    return total
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(2,2,231,312,321,312,312,312,321,31,23,1))