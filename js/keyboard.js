
function Keyboard(blanky) {
    this.element = document.createElement("div");

    for (let i = 0; i < 26; i++) {
        const alphabet = String.fromCharCode(65 + i).toLowerCase();
        const key = new KeyButton(alphabet, blanky);
        this.element.append(key.getElement());
    }

    this.getElement = function () {
        return this.element;
    }
}