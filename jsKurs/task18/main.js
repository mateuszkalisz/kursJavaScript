//#przyklad1

let i = 5;

for (let i = 0; i < 10; i++) {
    let i = 10;
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i < 4) {
        i = 10;
        console.log(`i wewnatrz instrukcji warunkowej w petli ma wartosc ${i}`);
    }
}

for (i = 0; i < 10; i++) {
    if (i < 4) {
        const inFor = "wenatrz petli i instr war INFOR";
        console.log(inFor);
    }
}

//#przyklad2

let example1 = "globalna";

if (true) {
    let example2 = "zakres lokalny w pierwszym ifie";

    if (true) {
        let example3 = "zakres lokalny w drugim ifie";
        example1 = "nowa wartość";
        console.log(example1);
        console.log(example2);
        console.log(example3);
    }

}