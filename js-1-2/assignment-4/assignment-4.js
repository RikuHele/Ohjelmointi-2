const name = prompt("Your name:")
const nmr = Math.floor(Math.random() * 4) + 1

if (nmr === 1) {
    document.querySelector('#target').innerHTML = (`${name}, you are Ravenclaw.`)
}
else if (nmr === 2) {
    document.querySelector('#target').innerHTML = (`${name}, you are Hufflepuff.`)
}
else if (nmr === 3) {
    document.querySelector('#target').innerHTML = (`${name}, you are Slytherin.`)
}
else if (nmr === 4) {
    document.querySelector('#target').innerHTML = (`${name}, you are Gryffindor.`)
}
