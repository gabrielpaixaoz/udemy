
const button = document.querySelector('#event')
const output = document.querySelector('#output')
let html = '<table border="1" cellpadding="5" cellspacing="0" width="500">'


button.addEventListener("click",() => {
const  numberHTML = Number(document.querySelector('#number').value)
let multiplier = Number(document.querySelector('#multiplier').value)

if(numberHTML > 0 && multiplier > 0){

    for(i = 1; i <= multiplier; i++){
        html += `<tr><td>${numberHTML} x ${i} = ${numberHTML * i}</td></tr>`
    }
    
    output.innerHTML = html
}


    
})





/*
  <table border="1" cellpadding="5" cellspacing="0" width="500">
                    <tr>
                        <td>teste</td>
                    </tr>
                    <tr>
                        <td>teste</td>
                    </tr>
                  </table>*/