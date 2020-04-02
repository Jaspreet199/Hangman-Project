
const SCORE_TEXT = "Score: ";
/**
 * function to create score button and how many scores to be increased every time
 */

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