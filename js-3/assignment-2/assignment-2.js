const participants = parseInt(prompt("Give a number of participants"))

const names = []

for (let i = 1; i <= participants; i++) {
    const answ = prompt("Give a name of the participent")
    names.push(answ)
}

names.sort()

for (let i = 0; i < names.length; i++) {
    document.querySelector("#target").innerHTML += `<li>${names[i]}</li>`
}