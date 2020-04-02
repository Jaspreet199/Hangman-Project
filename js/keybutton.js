
function KeyButton(key, blanky) {
    this.blanky = blanky;
    this.key = key;
    this.element = document.createElement("button");
    this.element.classList.add("KeyButton");
    this.element.innerText = this.key;

    this.element.onclick = function () {
        this.blanky.updateText(this.key);
        this.element.disabled = true;

        if (game.lifeSpan.life > 0) {
            game.lifeSpan.decrement(1);
        }
        else {
            document.write = "Game over! and you won"
            const name = prompt("please enter your name");
            const k = name + ", your score is " + game.scoreBoard.score;
            alert(k)
        }
    }.bind(this);



    this.getElement = function () {
        return this.element;
    }
}