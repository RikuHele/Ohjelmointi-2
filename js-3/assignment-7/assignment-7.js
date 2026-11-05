function roll(sides) {
    const number = Math.floor(Math.random() * sides) + 1
    return number
}

const sides = parseInt(prompt("Give a number of sides on a dice"))

while (true) {
    const result = roll(sides)

    document.querySelector("#target").innerHTML += `<li>${result}</li>`

    if (result === sides) {
        break
    }
}