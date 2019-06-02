const name = document.querySelector("#name");

const nameAnswer = document.getElementById("nameAnswer");

checkName = () => {
    if (name.value.length >= 4) {
        return (nameAnswer.textContent = "")
    } else {
        return (nameAnswer.textContent = "Imie musi być większe lub równe 4 znakom")
    }
}

const age = document.getElementById("age");

const ageAnswer = document.getElementById("ageAnswer");

checkAge = () => {
    if (age.value > 0) {
        return (ageAnswer.textContent = "")
    } else {
        return (ageAnswer.textContent = "Podałeś błędny wiek")
    }
}

const gender = document.getElementById("gender");

const genderAnswer = document.getElementById("genderAnswer");

checkGender = () => {
    if (gender.value === "kobieta") {
        return (genderAnswer.textContent = "");
    } else if (gender.value === "mężczyzna") {
        return (genderAnswer.textContent = "");
    } else {
        return (genderAnswer.textContent = "Nie ma takiej płci");
    }
}

const none = document.getElementById("none");
const low = document.getElementById("low");
const medium = document.getElementById("medium");
const high = document.getElementById("high");

const answer = document.querySelector(".answer");

checkActivity = () => {

    if (none.checked) {
        return (
            answer.textContent = `${name.value} masz ${age.value}, jesteś ${gender.value} i nie jesteś aktywnym człowiekiem!`
        )
    } else if (low.checked) {
        return (
            answer.textContent = `${name.value} masz ${age.value}, jesteś ${gender.value} i jesteś człowiekiem o średniej aktywności fizycznej`
        )
    } else if (medium.checked) {
        return (
            answer.textContent = `${name.value} masz ${age.value}, jesteś ${gender.value} i jesteś bardzo wysportowanym człowiekiem`
        )
    } else if (high.checked) {
        return (
            answer.textContent = `${name.value} masz ${age.value}, jesteś ${gender.value} i chyba jesteś zawodowym sportowcem!`
        )
    }

}

const button = document.querySelector("button");

const checkForm = (e) => {
    e.preventDefault();
    checkName();
    checkAge();
    checkGender();

    if (!nameAnswer.textContent && !ageAnswer.textContent && !genderAnswer.textContent) {
        checkActivity();
    } else return answer.textContent = "";


}

button.addEventListener("click", checkForm);

refresh = document.querySelector(".refresh");

refresh.addEventListener("click", () => {})