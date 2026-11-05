const names = ["Johnny", "DeeDee", "Joey", "Marky"]

function concat(names) {
    let result = ""
    
    for (let i = 0; i < names.length; i++) {
        result += names[i]
    }

    return result
}

const combined = concat(names)

document.querySelector("#target").innerHTML = `${combined}`