const value = document.querySelector('#value')

const btnDecr = document.querySelector('button[data-action="decrement"]')
const btnIncr =  document.querySelector('button[data-action="increment"]')

let counterValue = Number(document.querySelector('#value').textContent)

btnDecr.addEventListener('click', minus);
btnIncr.addEventListener('click', plus);

function minus() {
    counterValue -= 1      
    value.innerHTML = counterValue
}

function plus() {
    counterValue += 1       
    value.innerHTML = counterValue
}

//console.dir(counterValue)