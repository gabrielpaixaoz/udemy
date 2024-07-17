const somaInfinita2 = (...args) => {
    let total = 0;

    for(num of args){
        total += num;
    }
    return total
};

console.log(somaInfinita2(1, 2, 4));

console.log(somaInfinita2(5, 6, 6, 10 ,6,1234, 6,6,213))