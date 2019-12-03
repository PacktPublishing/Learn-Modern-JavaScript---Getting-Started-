
/*function Question(weight, cAnswer, lAnswer) {
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
};*/

class Question {
    constructor(weight, cAnswer, lAnswer) {
        this.weight = weight;
        this.correctAnswer = cAnswer;
        this.learnerAnswer = lAnswer;
        this.correct = (this.correctAnswer.toUpperCase() === this.learnerAnswer.toUpperCase());
    }

    getScore() {
        if (this.correct) {
            return this.weight;
        } else {
            return 0;
        }
    }
}

var questions = [],
    finalScore = 0,
    possibleScore = 0;

questions.push(new Question(1, "A", "B"));
questions.push(new Question(1, "D", "B"));
questions.push(new Question(1, "C", "C"));
questions.push(new Question(1, "A", "A"));
questions.push(new Question(1, "B", "B"));

for (let i = 0; i < questions.length; i++) {
    finalScore += questions[i].getScore();
    possibleScore += questions[i].weight;
}

console.log(`The score was ${finalScore} out of ${possibleScore}`);
