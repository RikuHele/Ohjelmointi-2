const numbers = []

while (true) {
    const number = parseFloat(prompt("Give a number"))

    if (numbers.includes(number)) {
        alert("The number has already been given")
        break
    }
    
    numbers.push(number)
}

numbers.sort((a, b) => a - b)

console.log(numbers)