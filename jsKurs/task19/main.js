//TWORZENIE OBIEKTU

//tworzymy obiekt:
const cat = new Object();

//tworzymy wlasciwosci obiektu:
cat.name = "Filemon";
cat['age'] = 2;
cat['eye color'] = "red";
cat.meow = () => {
    console.log("miauuu");
}

cat.sleep = function () {
    console.log("śpie sobie");
}

//literal obiektu - 2 sposob tworzenia
const dog = {
    name: "Aston",
    age: 2,
    'eye color': 'black',

    barking: function () {
        console.log("hau hau");
    },

    //ES6
    squeaking() {
        console.log('aaaa uuuu eee');
    }
}

//mozemy dynamicznie dodawac
dog.castrated = true;
dog.childrens = ["azor", "jagodka", "piesel"];

//USUWANIE 
delete dog.childrens;



//przyklad - odwolanie do obiektu w innej funkcji

const result = {
    value: 1,
}

function plus() {
    result.value++;
}

//odwolanie do obiektu na ktorym jest wykonywane (this)
const counter = {
    score: 0,
    increment: function () {
        this.score++;
        console.log(counter.score);
    }
}