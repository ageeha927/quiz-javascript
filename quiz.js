alert('Welcome to My Omori Quiz!')
let questions = ["Are Sunny and Omori the same person?", "Yes", "What is the name of Mari's Cat?", "Mewo", "What instrument does Mari play?", 'Piano', "What object does basil live in in the Dream Space?", 'Shoe', "What currency is used in the Dream Space?", "Clams", "Who takes photos of Omori's friend group?", 'Basil', "Who steals Basil's Phtoto Album in the Real World?", 'Aubrey', "Who taught everyone how to make flower crowns?", "Mari", 'Who turns into a Watermelon?', "Basil", "Who is the only one who will drink coffee and orange juice together?", "Kel" ]

let score = 0
// validating the prompt and making sure the section is filled before moving on
for (var i = 0; i < questions.length; i += 2) { //length was added because my code would stop at 5 questions
    let answer = prompt(questions[i])
    while (answer === null || answer.trim() === "") { //trim removes whitespace
        alert("An answer is required.")
        answer = prompt(questions[i]) //identifies the answer as the item directly after the question
    }
    if (answer.toLowerCase() === questions[i + 1].toLowerCase()) { //adding the score if correct and toLowerCase so the program isn't case sensitive
        score++
    }
}

let end = document.getElementById("score") //setting the var id so the text can be displayed on the webpage using html elements
end.textContent = score 
//feedback depending on how well they did on the quiz
let feedback = document.getElementById("feedback") 
if (score === questions.length / 2) {
    feedback.textContent = "Excellent!"
} else if (score >= questions.length / 4) {
    feedback.textContent = "Good job!"
} else {
    feedback.textContent = "Try again."
}