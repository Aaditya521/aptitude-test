const questions = [

    {
        question: "If 20% of a number is 50, what is the number?",
        options: ["100", "200", "250", "300"],
        answer: "250"
    },

    {
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: "50"
    },

    {
        question: "A train travels 60 km in 1 hour. How far will it travel in 3 hours?",
        options: ["120 km", "150 km", "180 km", "200 km"],
        answer: "180 km"
    },

    {
        question: "What is 15 + 25?",
        options: ["30", "35", "40", "45"],
        answer: "40"
    },

    {
        question: "What is 12 × 8?",
        options: ["86", "96", "106", "116"],
        answer: "96"
    },

    {
        question: "What is 144 ÷ 12?",
        options: ["10", "11", "12", "14"],
        answer: "12"
    },

    {
        question: "If a pen costs ₹20, how much will 5 pens cost?",
        options: ["₹80", "₹90", "₹100", "₹120"],
        answer: "₹100"
    },

    {
        question: "What is the average of 10, 20 and 30?",
        options: ["15", "20", "25", "30"],
        answer: "20"
    },

    {
        question: "A man buys an item for ₹500 and sells it for ₹600. What is his profit?",
        options: ["₹50", "₹100", "₹150", "₹200"],
        answer: "₹100"
    },

    {
        question: "What is 10% of 500?",
        options: ["25", "50", "75", "100"],
        answer: "50"
    },

    {
        question: "If 5 workers complete a job in 10 days, which factor generally affects the time needed?",
        options: ["Number of workers", "Color of tools", "Day of the week", "Worker's name"],
        answer: "Number of workers"
    },

    {
        question: "What is the square of 15?",
        options: ["125", "200", "225", "250"],
        answer: "225"
    },

    {
        question: "What is the next number: 2, 4, 6, 8, ___?",
        options: ["9", "10", "11", "12"],
        answer: "10"
    },

    {
        question: "If 3x = 21, what is x?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },

    {
        question: "What is the simple interest on ₹1000 at 10% per year for 1 year?",
        options: ["₹50", "₹100", "₹150", "₹200"],
        answer: "₹100"
    },

    {
        question: "A car travels 120 km in 2 hours. What is its average speed?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        answer: "60 km/h"
    },

    {
        question: "What is 3/4 of 100?",
        options: ["25", "50", "75", "80"],
        answer: "75"
    },

    {
        question: "If the ratio of boys to girls is 2:3 and there are 10 boys, how many girls are there?",
        options: ["12", "15", "18", "20"],
        answer: "15"
    },

    {
        question: "What is 30% of 300?",
        options: ["60", "90", "120", "150"],
        answer: "90"
    },

    {
        question: "A number is increased from 100 to 120. What is the percentage increase?",
        options: ["10%", "15%", "20%", "25%"],
        answer: "20%"
    }

];


let currentQuestion = 0;

let userAnswers = [];


// TIMER
let timeLeft = 20 * 60;


// Load Question
function loadQuestion() {

    const q = questions[currentQuestion];


    document.getElementById("question-number").innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    document.getElementById("question").innerText =
        q.question;


    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";


    q.options.forEach(function(option) {

        const button = document.createElement("button");

        button.innerText = option;


        if (userAnswers[currentQuestion] === option) {

            button.classList.add("selected");

        }


        button.onclick = function() {

            selectAnswer(option);

        };


        optionsContainer.appendChild(button);

    });


    updateQuestionPalette();

}


// Select Answer
function selectAnswer(option) {

    userAnswers[currentQuestion] = option;

    loadQuestion();

}


// Next
function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    }

}


// Previous
function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}


// Create Question Palette
function createQuestionPalette() {

    const palette =
        document.getElementById("question-palette");

    palette.innerHTML = "";


    for (let i = 0; i < questions.length; i++) {

        const button = document.createElement("button");

        button.innerText = i + 1;

        button.classList.add("question-button");


        button.onclick = function() {

            currentQuestion = i;

            loadQuestion();

        };


        palette.appendChild(button);

    }

}


// Update Palette
function updateQuestionPalette() {

    const buttons =
        document.querySelectorAll(".question-button");


    buttons.forEach(function(button, index) {

        button.classList.remove("current");

        button.classList.remove("answered");


        if (index === currentQuestion) {

            button.classList.add("current");

        }

        else if (userAnswers[index]) {

            button.classList.add("answered");

        }

    });

}


// TIMER FUNCTION
function startTimer() {

    const timer = document.getElementById("timer");


    const interval = setInterval(function() {

        let minutes = Math.floor(timeLeft / 60);

        let seconds = timeLeft % 60;


        seconds = seconds < 10 ? "0" + seconds : seconds;


        timer.innerText =
            `Time Remaining: ${minutes}:${seconds}`;


        if (timeLeft <= 0) {

            clearInterval(interval);

            alert("Time is over! Your test will be submitted.");

            submitTest();

        }


        timeLeft--;

    }, 1000);

}


// Submit Test
function submitTest() {

    let answered = 0;

    let skipped = 0;

    let correct = 0;

    let wrong = 0;


    for (let i = 0; i < questions.length; i++) {

        if (userAnswers[i]) {

            answered++;


            if (userAnswers[i] === questions[i].answer) {

                correct++;

            } else {

                wrong++;

            }

        } else {

            skipped++;

        }

    }


    let score = correct * 2;

    let totalMarks = questions.length * 2;

    let percentage = (score / totalMarks) * 100;


    document.getElementById("answered").innerText =
        "Answered: " + answered;

    document.getElementById("skipped").innerText =
        "Skipped: " + skipped;

    document.getElementById("correct").innerText =
        "Correct: " + correct;

    document.getElementById("wrong").innerText =
        "Wrong: " + wrong;

    document.getElementById("score").innerText =
        "Score: " + score + " / " + totalMarks;

    document.getElementById("percentage").innerText =
        "Percentage: " + percentage + "%";


    document.querySelector(".main-container").style.display =
        "none";

    document.getElementById("result").style.display =
        "block";

}


// Start Test
createQuestionPalette();

loadQuestion();

startTimer();