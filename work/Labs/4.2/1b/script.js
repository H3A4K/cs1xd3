window.addEventListener("load", function() {
    const question = document.getElementById("question");
    const answer = document.getElementById("answer")
    const message = document.getElementById("message");
    const submitButton = document.querySelector("button");
    
    let op1 = Math.floor(Math.random() * 200 - 100);
    let op2 = Math.floor(Math.random() * 200 - 100);
    question.innerHTML = "What is " + op1 + " + " + op2 + "?";

    submitButton.addEventListener("click", function() {
        let answerVal = answer.value
        const correctAnswer = op1 + op2;

        if (parseInt(answerVal) === correctAnswer) {
            message.innerHTML = "Correct!"
            message.style.color = "green";
        } else {
            message.innerHTML = "Incorrect. Try again."
            message.style.color = "red";
        }
    });

    answer.addEventListener("input", function() {
        let answerVal = answer.value

        if ((answerVal == "") || answerVal > 200 || answerVal < -200 || isNaN(answerVal)){
            answer.classList.add("invalid");
        } else {
            answer.classList.remove("invalid");
        }

    });
});
