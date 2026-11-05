function roll() {
    const number = Math.floor(Math.random() * 6) + 1
    return number
}

while (true) {
    const result = roll()

    document.querySelector("#target").innerHTML += `<li>${result}</li>`

    if (result === 6) {
        break
    }
}