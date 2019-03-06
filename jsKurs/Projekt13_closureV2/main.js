const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >=18 ? 'Mozesz kupić piwo!' : 'Nie możesz kupić piwa!'}`);
    }

    return showName;

}

const mieszko = user("mieszko", 18);
const jagienka = user("jagienka", 15);

mieszko();
jagienka();