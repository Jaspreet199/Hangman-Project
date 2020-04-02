const RESTART_TEXT = "Restart";

function RestartButton() {

    this.element = document.createElement("button");
    this.element.innerText = RESTART_TEXT;
    this.element.classList.add("RestartButton");

    this.element.onclick = function () {
        game.setup();
    }
    this.getElement = function () {
        return this.element;
    }
}
