const adviceArray = [];

const btnAdd = document.body.querySelector(".add");

const btnClean = document.body.querySelector(".clean");

const btnShowAdvice = document.body.querySelector(".showAdvice");

const btnShowOptions = document.body.querySelector(".showOptions");

addAdvice = (e) => {
    e.preventDefault();
    const input = document.body.querySelector("input");
    const item = input.value;

    if (input.value.length === 0) {
        alert("nie podano żadnej wartości!");
        return;
    }

    if (input.value.length > 0) {
        for (advice of adviceArray) {
            if (advice === item) {
                alert("Już była taka rada!");
                return;
            }
        }
    }
    adviceArray.push(item);
    alert(`Dodano nową radę: "${item}"`);
    input.value = "";
}

cleanAdvices = (e) => {
    e.preventDefault();
    adviceArray.splice(0, adviceArray.length);
    console.log(adviceArray);
    alert("Tablica rad została wyczyszczona!");
}

showAdviceMethod = () => {
    if (adviceArray.length === 0) {
        alert("brak mozliwosci w bazie danych! proszę dodać nowe! ;)");
    } else {
        const h1 = document.body.querySelector("h1");
        const index = Math.floor(Math.random() * adviceArray.length);

        h1.textContent = `${adviceArray[index]}`;
    }

}

showOptionsMethod = () => {
    if (adviceArray.length === 0) {
        alert("brak możliwości, należy je wprowadzić!");
    } else {
        // let arrayBox = "";
        // for (let i = 0; i < adviceArray.length; i++) {
        //     arrayBox += `${i+1}. ${adviceArray[i]} ,`;
        // }
        // alert(arrayBox);
        alert(adviceArray.join(" ----- "));
    }
}


btnAdd.addEventListener("click", addAdvice);

btnClean.addEventListener("click", cleanAdvices);

btnShowAdvice.addEventListener("click", showAdviceMethod);

btnShowOptions.addEventListener("click", showOptionsMethod);