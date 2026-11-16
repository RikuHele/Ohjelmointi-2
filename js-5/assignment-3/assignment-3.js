const form = document.querySelector("form")
const input = document.querySelector("#query")
const results = document.querySelector("#results")

form.addEventListener("submit", async (evt) => {
    evt.preventDefault()

    const value = input.value

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    const data = await response.json()

    results.innerHTML = ""

    for (const sarja of data) {
        const article = document.createElement("article")

        const h2 = document.createElement("h2")
        h2.textContent = sarja.show.name
        article.appendChild(h2)

        const linkki = document.createElement("a")
        linkki.href = sarja.show.url
        linkki.target = "_blank"
        linkki.textContent = "Details"
        article.appendChild(linkki)

        const img = document.createElement("img")
        img.src = sarja.show.image?.medium
        img.alt = sarja.show.name
        article.appendChild(img)

        const summary = document.createElement("div")
        summary.innerHTML = sarja.show.summary
        article.appendChild(summary)

        results.appendChild(article)
    }
})