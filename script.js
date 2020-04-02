const HEIGHT = 20;
const WIDTH = 20;
const j = 26;
function Button (){
    this.element = document.getElementById(button)
    this.element.style.backgroundColor = grey;
    this.element.style.height = HEIGHT+ "px";
    this.element.style.width = WIDTH +"px";
    this.element.classList.add("");

    
}
function createButton(j) {
    const list = [];
    for (let j = 0; j < i; j++){
   const button = new Button ();
    button.element.innerText = String.fromCharCode(65 + i);
    list.push(button);
    }
}

function PlayScreen() {

    this.screen = document.getElementById("screen");

    

    this.show = function () {
        this.screen.innerHTML = "";
        this.screen.append(game.scoreBoard.getElement());
        this.screen.append(game.life.getElement());
       this.screen.append(game.restart.getElement());

        
    }
}
const SCORE_TEXT = "Score: ";

function ScoreBoard() {

    this.score = 0;
    this.element = document.createElement("div");
    this.element.classList.add("scoreboard");
    this.element.innerText = SCORE_TEXT + this.score;

    this.getElement = function () {
        return this.element;
    }

    this.addScore = function (n) {
        this.score += n;

        this.element.innerText = SCORE_TEXT + this.score;
    }
}
const Life_TEXT = "Life: ";
function LifeSpan() {

    this.life = 7;
    this.element = document.createElement("div");
    this.element.classList.add("scoreboard");
    this.element.innerText = Life_TEXT + this.life;

    this.getElement = function () {
        return this.element;
    }

    this.decrement = function (n) {
        this.life -= n;

        this.element.innerText = Life_TEXT + this.life;
    }
}
