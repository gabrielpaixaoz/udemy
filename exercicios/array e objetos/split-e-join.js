const FRASE = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = FRASE.split(" ");

console.log(arrayDaFrase)

const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const ITENS_PARA_COMPRAR  = ["Mouse","Teclado","Monitor"];

const FRASE_DE_COMPRA = `Precisamos comprar: ${ITENS_PARA_COMPRAR.join(", ")}.`

console.log(FRASE_DE_COMPRA)