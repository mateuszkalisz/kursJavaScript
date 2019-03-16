'use strict' //tryb scisly
//this

//this - obiektu globalnego

const fn = function () {
    console.log(this.name);
}

//fn();

const obj = {
    name: "Adam",
    fn: fn,
}

obj.fn();

document.addEventListener("click", () => {
    console.log(this);
    'use strict' //wczesnije this przyporzadkowany zostal do obiektu document a nizej juz w dodatkowej funkcji do rzadnego dlatego przy uzyciu use strict bedzie undefined
    const inside = function () {
        console.log(this);
    }
    inside();
})