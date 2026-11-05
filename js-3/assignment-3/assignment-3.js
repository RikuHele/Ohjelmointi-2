const dogs = []

for (let i = 1; i <= 6; i++) {
    const names = prompt("Give me a name for 6 dogs")
    dogs.push(names)
}

dogs.sort()
dogs.reverse()

for (let i = 0; i < dogs.length; i++) {
    document.querySelector("#target").innerHTML += `<li>${dogs[i]}</li>`
}