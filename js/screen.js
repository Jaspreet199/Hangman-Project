/**
 * actual screen of game with scoreboard,lifeboard, keyboard,hint,restart button.
 */
function Screen() {
    this.screen = document.getElementById("screen");


    this.show = function () {
        this.screen.innerHTML = "";

        this.screen.append(game.scoreBoard.getElement());

        this.screen.append(game.lifeSpan.getElement());

        this.screen.append(game.blanky.getElement());
        this.screen.append(game.keyBoard.getElement());
        this.screen.append(game.hintButton.getElement());

        this.screen.append(game.restartButton.getElement());

    }

}