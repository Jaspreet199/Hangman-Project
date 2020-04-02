const HINT_TEXT = "Hint";

function HintButton(definition) {

    this.text = definition;

    this.element = document.createElement("button");
    this.element.innerText = HINT_TEXT;
    this.element.classList.add("HelpButton");

    this.element.onclick = function (input) {
        const txt = HINT_TEXT + ": " + this.text;
        alert(txt);
    }.bind(this);

    this.getElement = function () {
        return this.element;
    }
}
