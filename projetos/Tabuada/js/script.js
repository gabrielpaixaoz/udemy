const MULTIPLICATION_FORM = document.querySelector("#multiplication-form")
const NUMBER_INPUT = document.querySelector("#number")
const MULTIPLICATION_INPUT = document.querySelector("#multiplier")
const MULTIPLICATION_TABLE = document.querySelector("#multiplication-operations")


const CREATE_TABLE = (NUMBER, MULTIPLICATOR_NUMBER) =>{
    MULTIPLICATION_TABLE.innerHTML = ""

    for(i = 1; i <= MULTIPLICATOR_NUMBER; i++){
        const RESULT = NUMBER * i
        console.log(RESULT)

        const TEMPLATE = `<div class="row">
                <div class="opera"> ${NUMBER} x ${i} =</div>
                <div class="result">${RESULT}</div>
            </div>`
          const PARSER = new DOMParser()
          const HTML_TEMPLATE = PARSER.parseFromString(TEMPLATE, "text/html")
          const ROW = HTML_TEMPLATE.querySelector(".row")
          MULTIPLICATION_TABLE.appendChild(ROW)
        }
}



MULTIPLICATION_FORM.addEventListener("submit", (e) =>{
    e.preventDefault()
    const NUMBER = +NUMBER_INPUT.value

    const MULTIPLICATOR_NUMBER = +MULTIPLICATION_INPUT.value

    if(!NUMBER || !MULTIPLICATOR_NUMBER) return
    
    CREATE_TABLE(NUMBER,MULTIPLICATOR_NUMBER)
})



/*<div class="row">
                <div class="opera"> 5 x 1 =</div>
                <div class="result">5</div>
            </div>
            <div class="row">
                <div class="opera"> 5 x 2 =</div>
                <div class="result">10</div>
*/