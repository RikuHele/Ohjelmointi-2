let i = 1
const numbers = []

while (i < 2) {
    const number = parseFloat(prompt("Give a number"))
    numbers.push(number)

    if (number === 0) {
        break
    }
}

numbers.sort((a, b) => b - a)
console.log(numbers)