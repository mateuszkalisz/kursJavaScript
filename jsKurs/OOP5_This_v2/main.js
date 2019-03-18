//problem utraty wiązania

const szarik = {
    children: ["fafik", "żaba"],
    showChildren: function () {
        const that = this;
        this.children.forEach(function (child, index) {
            console.log(child);
            //console.log(that.children[index]);
        })
    }
}

szarik.showChildren();

const rexio = {
    children: ["fafik", "żaba"],
    showChildren: function () {
        for (const child of this.children) {
            console.log(child);
        }
    }
}

rexio.showChildren();

//arrow function -> nie tworzy wlasnego thisa tylko dziedziczy te wiązanie

const owczarek = {
    children: ["fafik", "żaba"],
    showChildren: function () {
        const that = this;
        this.children.forEach((child, index) => {
            console.log(that.children[index]);
        })
    }
}


owczarek.showChildren();


//bind
const dog = {
    children: ["fafik", "żaba"],
    showChildren: function () {
        this.children.forEach(function (child, index) {
            console.log(this.children[index]);
        }.bind(this))
    },
}

dog.showChildren();