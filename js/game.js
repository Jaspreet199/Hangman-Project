function Game() {
    this.setup = function () {

        this.scoreBoard = new ScoreBoard();

        this.lifeSpan = new LifeSpan();
        this.screen = new Screen();
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
}

const game = new Game();

game.setup();
