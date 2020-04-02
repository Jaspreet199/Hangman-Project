
function Blanky(word) {
    this.word = word;
    this.element = document.createElement("p");

    this.list = []
    for (let j = 0; j < this.word.length; j++) {
        this.list.push("_");
    }


    this.updateText = function (input) {
        let is
        const positions = this.getPositions(input);
        let txt = "";
        for (let i = 0; i < this.word.length; i++) {

            txt += " ";
            if (positions.includes(i)) {
                txt += input;
                this.list[i] = input;
            }
            else {
                txt += this.list[i];
            }
        }
        this.element.innerText = txt;
        if (!this.list.includes("_")) {
            document.write = "Game over! and you won"
            const name = prompt("please enter your name");
            const k = name + ", your score is " + game.scoreBoard.score;
            alert(k)
        }
    }
    this.getPositions = function (input) {
        const positons = [];
        for (let i = 0; i < this.word.length; i++) {
            const c = this.word.charAt(i).toLowerCase();
            if (c === input) {
                positons.push(i);
            }
        }
        return positons;
    }
    this.resolve = function () {
        // Call this function when game is finished.
    }
    this.provideHint = function () {
    }
    this.getElement = function () {
        return this.element;
    }
}
