class Draw {
    constructor() {
        this.options = ["red", "blue", "green"];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }

    drawResult() {
        let _colors = [];
        ///uzupelnianie poprzez losowanie
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            _colors.push(color);
        }
        return _colors;
    }
}

//const draw = new Draw();