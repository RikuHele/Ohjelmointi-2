const numbers = []

for (let i = 1; i <= 5; i++) {
    const answer = prompt("Give a number")
    numbers.push(answer)
}

for (let i = 4; i >= 0; i--) {
    console.log(numbers[i])
}