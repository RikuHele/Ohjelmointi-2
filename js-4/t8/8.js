const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const operation = document.querySelector("#operation")
const start = document.querySelector("#start")
const result = document.querySelector("#result")

start.addEventListener("click", () => {
    const n1 = parseInt(num1.value)
    const n2 = parseInt(num2.value)

    if (operation.value === "add") {
        const sum = n1 + n2
        result.textContent = sum
    }

    else if (operation.value === "sub") {
        const minus = n1 - n2
        result.textContent = minus
    }

    else if (operation.value === "multi") {
        const multiply = n1 * n2
        result.textContent = multiply
    }

    else if (operation.value === "div") {
        const division = n1 / n2
        result.textContent = division
    }
})