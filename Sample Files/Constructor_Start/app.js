
function Question(weight, cAnswer, lAnswer) {
    this.weight = weight;
    this.correctAnswer = cAnswer;
    this.learnerAnswer = lAnswer;
    this.correct = (this.correctAnswer.toUpperCase() === this.learnerAnswer.toUpperCase());
}

Question.prototype.getScore = function() {
    if (this.correct) {
        return this.weight;
    } else {
        return 0;
    }
};
