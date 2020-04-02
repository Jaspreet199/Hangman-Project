function WordPicker() {
    this.words = JSON.parse(data);
    this.words.push({
        word: "Committee",
        def: "Test word asked by teacher to be in this project"
    })

    /**
     * 1) Select a random number
     * 2) Give me object with word, definition at random
     * 2) Remove the given word object from the words list.
     */
    this.next = function () {
        const randomIndex = randNum(0, this.words.length - 1);
        const word = this.words.splice(randomIndex, 1);


        return word[0];


    }

}

function randNum(min, max) {
    return min + Math.random() * (max - min)
}