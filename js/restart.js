const RESTART_TEXT = "Restart";
/**
 * button to start the game over again with new scores and lives.
 */

function RestartButton() {

    this.element = document.createElement("button");
    this.element.innerText = RESTART_TEXT;
    this.element.classList.add("HelpButton");

    this.element.onclick = function () {
        game.setup();
    }
    this.getElement = function () {
        return this.element;
    }
}
