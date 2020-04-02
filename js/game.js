function Game() {
    this.setup = function () {

        this.scoreBoard = new ScoreBoard();

        this.lifeSpan = new LifeSpan();
        this.screen = new Screen();
        this.overScreen = new OverScreen();
        this.picker = new WordPicker();

        const dict = this.picker.next();
        console.log(dict.word);
        console.log(dict.def)

        this.blanky = new Blanky(dict.word);

        this.keyBoard = new Keyboard(this.blanky);
        this.blanky.updateText("%");

        this.restartButton = new RestartButton();
        this.hintButton = new HintButton(dict.def);

        this.screen.show();
    }


    this.won = function () {
        if (this.blanky.isComplete() === true) {
            const name = prompt("please enter your name");
            this.overScreen.show(name, this.scoreBoard.score, "WON");
        }
    }

    this.over = function () {
        if (this.lifeSpan.life === -1) {
            const name = prompt("please enter your name");
            this.overScreen.show(name, this.scoreBoard.score, "LOST");
        }
    }
}

const game = new Game();

game.setup();
