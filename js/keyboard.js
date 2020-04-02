/**
 * 
 * @param {*} blanky - a list of blanks
 */
function Keyboard(blanky) {
    this.element = document.createElement("div");
    this.element.classList.add("keyboard");

    this.topDiv = document.createElement("div");
    this.topDiv.classList.add("top");
    this.topDiv.classList.add("row");

    this.middleDiv = document.createElement("div");
    this.middleDiv.classList.add("middle");
    this.middleDiv.classList.add("row");

    this.bottomDiv = document.createElement("div");
    this.bottomDiv.classList.add("bottom");
    this.bottomDiv.classList.add("row");

    this.element.append(this.topDiv, this.middleDiv, this.bottomDiv);

    let i = 0;
    for (; i < 11; i++) {
        const key = buildKey(i, blanky);
        this.topDiv.append(key.getElement());
    }

    for (; i < 19; i++) {
        const key = buildKey(i, blanky);
        this.middleDiv.append(key.getElement());
    }

    for (; i < 26; i++) {
        const key = buildKey(i, blanky);
        this.bottomDiv.append(key.getElement());
    }

    this.getElement = function () {
        return this.element;
    }
}
/**
 * 
 * @param {*} i - number of key buttons
 * @param {*} blanky - a list of blanks need to be created.
 */

function buildKey(i, blanky) {
    const alphabet = String.fromCharCode(65 + i).toLowerCase();
    const key = new KeyButton(alphabet, blanky);

    return key;
}