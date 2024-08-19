function checkArray(arr){
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos")
    }else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}


//checkArray([])

checkArray([1, 2, 3])

