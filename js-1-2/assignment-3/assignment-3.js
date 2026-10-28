const n1 = parseInt(prompt("Give a number: "));
const n2 = parseInt(prompt("Give a second number: "));
const n3 = parseInt(prompt("Give a third number: "));

document.querySelector('#target').innerHTML += (`Sum: ${n1 + n2 + n3}<br>`)
document.querySelector('#target').innerHTML += (`Product: ${n1 * n2 * n3}<br>`)
document.querySelector('#target').innerHTML += (`Average: ${(n1 + n2 + n3) / 3}<br>`)