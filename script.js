let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const attemptsText = document.getElementById("attempts");

button.addEventListener("click", checkGuess);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkGuess();
});

function checkGuess() {
    const userGuess = Number(input.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "❌ Please enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (userGuess > randomNumber) {
        feedback.textContent = "📉 Lower number please";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "📈 Higher number please";
    } else {
        feedback.textContent = "🎉 Congratulations! You guessed it!";
        attemptsText.textContent = `You guessed the number in ${attempts} attempts.`;
        button.disabled = true;
        input.disabled = true;
        return;
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
    input.value = "";
}
