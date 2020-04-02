
function KeyButton(key, blanky) {
    this.blanky = blanky;
    this.key = key;
    this.element = document.createElement("button");
    this.element.classList.add("KeyButton");
    this.element.innerText = this.key;

    this.element.onclick = function () {
        const numOfMatches = this.blanky.updateText(this.key);
        this.element.disabled = true;

        if (numOfMatches > 0) {
            game.scoreBoard.addScore(numOfMatches);

        } else {
            game.lifeSpan.decrement(1);
        }

        game.won();
        game.over();

    }.bind(this);

    this.getElement = function () {
        return this.element;
    }
}