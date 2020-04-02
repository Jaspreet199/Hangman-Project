/**
 * function to show  end screen with  result and greetings
 */
function OverScreen() {
    this.screen = document.getElementById("screen");


    this.show = function (name, score, status) {

        let greeting = status === "WON" ? "Congratulations" : "Game Over";

        this.screen.innerHTML = "";

        this.screen.append(game.restartButton.getElement());
        this.paragraph = document.createElement("p");
        this.paragraph.innerText = greeting + ", " + name + "! You " + status + "! Your score is: " + score;
        this.screen.append(this.paragraph);
    }

}