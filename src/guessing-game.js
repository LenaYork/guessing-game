class GuessingGame {
    constructor() {
        this.leftEdge = 0;
        this.rightEdge = 0;
        this.userGuess = 0;
    }

    setRange(min, max) {
        this.leftEdge = min;
        this.rightEdge = max;
    }

    guess() {
        return this.userGuess = Math.ceil((this.leftEdge+this.rightEdge)/2);
    }

    lower() {
        this.rightEdge = this.userGuess;
    }

    greater() {
        this.leftEdge = this.userGuess;
    }
}

module.exports = GuessingGame;
