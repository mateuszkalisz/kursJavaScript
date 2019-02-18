const btn = document.body.querySelector("button");
const div = document.body.querySelector("div");
const names = ["Jagienka", "Kasia", "Maja", "Kunegunda", "Jessica", "Marysia"];
const prefix = ["Wydaje mi się ", "Myślę, że ", "Moim zdaniem ", "Jestem prawie pewny, że "];


const nameGenerator = function () {

    const indexNames = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefix.length);
    div.textContent = `${prefix[indexPrefix]}najlepsze imie dla dziewczynki to: ${names[indexNames]}`;
}

btn.addEventListener("click", nameGenerator);