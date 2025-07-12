const correctAnswers = [8, 6, 42, 5, 20, 8, 36, 4, 20, 13, 60, 100];

function calculateScore(callback) {
    const answers = [];
    for (let i = 1; i <= correctAnswers.length; i++) {
        const answer = parseInt(document.getElementById(`q${i}`).value) || 0;
        answers.push(answer);
    }
    return callback(answers, correctAnswers);
}

function score(answers, correctAnswers) {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            score++;
        }
    }
    return score;
}

function percentage(answers, correctAnswers) {
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === correctAnswers[i]) {
            correct++;
        }
    }
    return ((correct / correctAnswers.length) * 100).toFixed(2);
}

document.getElementById('check').addEventListener('click', function() {
    const finalscore = calculateScore(score);
    const finalpercentage = calculateScore(percentage);
    
    const display = document.getElementById('display');
    display.innerHTML = `
        <p>Score: ${finalscore} / ${correctAnswers.length}</p>
        <p>Percentage: ${finalpercentage}% out of 100%</p>
    `;
}); 
