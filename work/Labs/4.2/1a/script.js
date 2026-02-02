window.addEventListener("load", function() {
    const question = document.getElementById("question");

    let op1 = Math.floor(Math.random() * 200 - 100);
    let op2 = Math.floor(Math.random() * 200 - 100);
    question.innerHTML = "What is " + op1 + " + " + op2 + "?";

    const submitButton = document.querySelector("button");
    submitButton.addEventListener("click", function() {
        const answer = document.getElementById("answer").value;
        const message = document.getElementById("message");
        const correctAnswer = op1 + op2;

        if (parseInt(answer) === correctAnswer) {
            message.innerHTML = "Correct!";
        } else {
            message.innerHTML = "Incorrect. Try again.";
        }
    });
});
