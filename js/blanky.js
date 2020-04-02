
function Blanky(word) {
    this.word = word;
    this.element = document.createElement("p");
    this.element.classList.add("blanky")

    this.list = []
    for (let j = 0; j < this.word.length; j++) {
        this.list.push("_");
    }


    this.updateText = function (input) {
        let numOfMatches = 0;
        const positions = this.getPositions(input);
        let txt = "";
        for (let i = 0; i < this.word.length; i++) {

            txt += " ";
            if (positions.includes(i)) {
                txt += input;
                this.list[i] = input;

                numOfMatches++;
            }
            else {
                txt += this.list[i];
            }
        }
        this.element.innerText = txt;

        return numOfMatches;
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

    this.getElement = function () {
        return this.element;
    }

    this.isComplete = function () {
        let complete = false;
        if (!this.list.includes("_")) {
            complete = true;
        }

        return complete;
    }
}
