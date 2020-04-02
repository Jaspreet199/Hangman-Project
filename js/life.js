
const Life_TEXT = "Life: ";
/**
 * function to create a button for number of lives
 */
function LifeSpan() {

    this.life = 7;
    this.element = document.createElement("div");
    this.element.classList.add("LifeSpan");
    this.element.innerText = Life_TEXT + this.life;

    this.getElement = function () {
        return this.element;
    }
    /**
     * function to decrease the lives
     */

    this.decrement = function (n) {
        this.life -= n;
        this.element.innerText = Life_TEXT + this.life;
    }
}

//fix life concept
// say congrats you won
//say you loose
//When the game ends, the user should be prompted for their name. After they enter it, there should be a message saying "<name>, your score is <score>"

// put hint button