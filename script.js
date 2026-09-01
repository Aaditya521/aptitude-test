// ================= TEST SETTINGS =================

const MARKS_PER_QUESTION = 2;
const TEST_TIME_MINUTES = 60;


// ================= QUESTIONS =================

const questions = [

    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "define", "def", "fun"],
        answer: 2
    },

    {
        question: "Which data type is used to store True or False?",
        options: ["int", "str", "bool", "float"],
        answer: 2
    },

    {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "/*", "#", "--"],
        answer: 2
    },

    {
        question: "Which function is used to take input from the user?",
        options: ["get()", "input()", "scan()", "read()"],
        answer: 1
    },

    {
        question: "Which function is used to display output in Python?",
        options: ["display()", "show()", "print()", "output()"],
        answer: 2
    },

    {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "//", "**", "%%"],
        answer: 2
    },

    {
        question: "What is the correct extension of a Python file?",
        options: [".java", ".py", ".python", ".pt"],
        answer: 1
    },

    {
        question: "Which keyword is used for a conditional statement?",
        options: ["when", "check", "if", "condition"],
        answer: 2
    },

    {
        question: "Which keyword is used when the condition is false?",
        options: ["otherwise", "else", "false", "not"],
        answer: 1
    },

    {
        question: "Which loop is used to iterate over a sequence?",
        options: ["for", "repeat", "loop", "iterate"],
        answer: 0
    },

    {
        question: "Which keyword is used to exit a loop?",
        options: ["stop", "exit", "break", "close"],
        answer: 2
    },

    {
        question: "Which keyword skips the current iteration?",
        options: ["skip", "continue", "pass", "next"],
        answer: 1
    },

    {
        question: "Which data structure stores multiple values in order?",
        options: ["set", "tuple", "list", "dictionary"],
        answer: 2
    },

    {
        question: "Which data structure stores key-value pairs?",
        options: ["list", "dictionary", "tuple", "set"],
        answer: 1
    },

    {
        question: "Which symbol is used to create a list?",
        options: ["()", "{}", "[]", "<>"],
        answer: 2
    },

    {
        question: "Which symbol is used to create a tuple?",
        options: ["[]", "{}", "() ", "<>"],
        answer: 2
    },

    {
        question: "Which data type does not allow duplicate values?",
        options: ["list", "tuple", "set", "string"],
        answer: 2
    },

    {
        question: "What does len() return?",
        options: [
            "The value",
            "The length",
            "The data type",
            "The memory address"
        ],
        answer: 1
    },

    {
        question: "Which function converts a value to integer?",
        options: ["str()", "float()", "int()", "integer()"],
        answer: 2
    },

    {
        question: "Which function converts a value to string?",
        options: ["string()", "str()", "text()", "char()"],
        answer: 1
    },

    {
        question: "What is cybersecurity?",
        options: [
            "Protecting computer systems and networks",
            "Creating websites",
            "Playing games",
            "Designing graphics"
        ],
        answer: 0
    },

    {
        question: "What does CIA stand for in cybersecurity?",
        options: [
            "Computer Internet Access",
            "Confidentiality, Integrity, Availability",
            "Cyber Intelligence Agency",
            "Central Internet Authority"
        ],
        answer: 1
    },

    {
        question: "What is phishing?",
        options: [
            "A network cable",
            "A type of database",
            "A social engineering attack",
            "A programming language"
        ],
        answer: 2
    },

    {
        question: "What is malware?",
        options: [
            "Malicious software",
            "Network hardware",
            "Antivirus software",
            "Operating system"
        ],
        answer: 0
    },

    {
        question: "Which malware can replicate itself?",
        options: [
            "Trojan",
            "Virus",
            "Spyware",
            "Adware"
        ],
        answer: 1
    },

    {
        question: "What is ransomware?",
        options: [
            "Software that improves performance",
            "Malware that encrypts files and demands payment",
            "A firewall",
            "A network protocol"
        ],
        answer: 1
    },

    {
        question: "What is a firewall?",
        options: [
            "A programming language",
            "A security system that filters network traffic",
            "A type of malware",
            "A password manager"
        ],
        answer: 1
    },

    {
        question: "What does VPN stand for?",
        options: [
            "Virtual Private Network",
            "Very Protected Network",
            "Virtual Public Network",
            "Verified Private Node"
        ],
        answer: 0
    },

    {
        question: "Which protocol is commonly used for secure web browsing?",
        options: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        answer: 2
    },

    {
        question: "Which protocol is used to resolve domain names to IP addresses?",
        options: [
            "DNS",
            "DHCP",
            "FTP",
            "SSH"
        ],
        answer: 0
    },

    {
        question: "What is an IP address?",
        options: [
            "A unique address used to identify a device on a network",
            "A password",
            "A website",
            "A software application"
        ],
        answer: 0
    },

    {
        question: "What does MAC address identify?",
        options: [
            "A website",
            "A network interface",
            "A password",
            "A domain"
        ],
        answer: 1
    },

    {
        question: "What is DoS attack?",
        options: [
            "Data Operating System",
            "Denial of Service",
            "Domain Operating Security",
            "Digital Online Service"
        ],
        answer: 1
    },

    {
        question: "What is DDoS attack?",
        options: [
            "Distributed Denial of Service",
            "Direct Data Operating System",
            "Digital Denial of Security",
            "Distributed Data Online Service"
        ],
        answer: 0
    },

    {
        question: "What is brute force attack?",
        options: [
            "Trying many possible passwords",
            "Stealing hardware",
            "Blocking a website",
            "Encrypting data"
        ],
        answer: 0
    },

    {
        question: "What is dictionary attack?",
        options: [
            "Using random IP addresses",
            "Using a list of commonly used passwords",
            "Scanning ports",
            "Encrypting files"
        ],
        answer: 1
    },

    {
        question: "What is password spraying?",
        options: [
            "Using one password against many accounts",
            "Using many passwords against one account",
            "Changing passwords frequently",
            "Encrypting passwords"
        ],
        answer: 0
    },

    {
        question: "What is credential stuffing?",
        options: [
            "Creating strong passwords",
            "Using stolen username-password combinations",
            "Scanning a network",
            "Blocking accounts"
        ],
        answer: 1
    },

    {
        question: "What is ARP spoofing?",
        options: [
            "Attacking DNS servers",
            "Sending fake ARP messages",
            "Encrypting ARP packets",
            "Blocking HTTP traffic"
        ],
        answer: 1
    },

    {
        question: "What is DNS spoofing?",
        options: [
            "Sending fake DNS responses",
            "Changing MAC addresses",
            "Blocking ports",
            "Encrypting DNS"
        ],
        answer: 0
    },

    {
        question: "What is IP spoofing?",
        options: [
            "Changing the source IP address",
            "Changing the password",
            "Changing the MAC address",
            "Changing the DNS server"
        ],
        answer: 0
    },

    {
        question: "What is sniffing?",
        options: [
            "Capturing and analyzing network traffic",
            "Deleting files",
            "Creating passwords",
            "Blocking websites"
        ],
        answer: 0
    },

    {
        question: "What is MITM attack?",
        options: [
            "Man In The Machine",
            "Man In The Middle",
            "Machine In The Middle",
            "Middle Internet Machine"
        ],
        answer: 1
    },

    {
        question: "What is hashing?",
        options: [
            "Converting data into a fixed-size value",
            "Deleting data",
            "Sending data",
            "Compressing files"
        ],
        answer: 0
    },

    {
        question: "Which of the following is a hashing algorithm?",
        options: [
            "HTTP",
            "FTP",
            "SHA-256",
            "DNS"
        ],
        answer: 2
    },

    {
        question: "What is encryption?",
        options: [
            "Converting readable data into unreadable form",
            "Deleting data",
            "Copying data",
            "Opening files"
        ],
        answer: 0
    },

    {
        question: "What is authentication?",
        options: [
            "Verifying the identity of a user",
            "Deleting a user",
            "Creating a network",
            "Scanning ports"
        ],
        answer: 0
    },

    {
        question: "What is authorization?",
        options: [
            "Checking who the user is",
            "Giving permissions to an authenticated user",
            "Encrypting passwords",
            "Blocking a user"
        ],
        answer: 1
    },

    {
        question: "What is MFA?",
        options: [
            "Multiple File Access",
            "Multi-Factor Authentication",
            "Main Firewall Access",
            "Multiple Firewall Authentication"
        ],
        answer: 1
    },

    {
        question: "Which command is commonly used to test network connectivity?",
        options: [
            "ping",
            "copy",
            "mkdir",
            "delete"
        ],
        answer: 0
    },

    {
        question: "Which tool is commonly used for network scanning?",
        options: [
            "Nmap",
            "Notepad",
            "Calculator",
            "Paint"
        ],
        answer: 0
    }

];


// ================= VARIABLES =================

let currentQuestion = 0;

let userAnswers = new Array(questions.length).fill(null);

let timeLeft = TEST_TIME_MINUTES * 60;

let timerInterval = null;

let testStarted = false;

let studentName = "";

let rollNumber = "";


// ================= START TEST =================

function startTest() {

    const nameInput = document.getElementById("student-name");
    const rollInput = document.getElementById("roll-number");
    const error = document.getElementById("start-error");

    studentName = nameInput.value.trim();
    rollNumber = rollInput.value.trim();

    if (studentName === "" || rollNumber === "") {

        error.innerText = "Please enter your name and roll number.";

        return;
    }

    error.innerText = "";

    document.getElementById("start-screen").style.display = "none";

    document.getElementById("test-screen").style.display = "flex";

    currentQuestion = 0;

    userAnswers = new Array(questions.length).fill(null);

    timeLeft = TEST_TIME_MINUTES * 60;

    testStarted = true;

    createQuestionPalette();

    displayQuestion();

    startTimer();
}


// ================= DISPLAY QUESTION =================

function displayQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("question-number").innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").innerText =
        question.question;

    const optionsContainer = document.getElementById("options");

    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.innerText = option;

        button.className = "option-button";


        if (userAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }


        button.onclick = function () {

            selectAnswer(index);

        };


        optionsContainer.appendChild(button);

    });


    updatePalette();

    updateNavigationButtons();
}


// ================= SELECT ANSWER =================

function selectAnswer(answerIndex) {

    userAnswers[currentQuestion] = answerIndex;

    displayQuestion();

}


// ================= PREVIOUS QUESTION =================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();

    }

}


// ================= NEXT QUESTION =================

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        displayQuestion();

    }

}


// ================= QUESTION PALETTE =================

function createQuestionPalette() {

    const palette = document.getElementById("question-palette");

    palette.innerHTML = "";


    for (let i = 0; i < questions.length; i++) {

        const button = document.createElement("button");

        button.innerText = i + 1;

        button.className = "palette-button";


        button.onclick = function () {

            currentQuestion = i;

            displayQuestion();

        };


        palette.appendChild(button);

    }

}


// ================= UPDATE PALETTE =================

function updatePalette() {

    const buttons =
        document.querySelectorAll(".palette-button");


    buttons.forEach((button, index) => {

        button.classList.remove("answered");
        button.classList.remove("current");


        if (userAnswers[index] !== null) {

            button.classList.add("answered");

        }


        if (index === currentQuestion) {

            button.classList.add("current");

        }

    });

}


// ================= NAVIGATION BUTTONS =================

function updateNavigationButtons() {

    const previousButton =
        document.getElementById("previous-button");

    const nextButton =
        document.getElementById("next-button");


    if (currentQuestion === 0) {

        previousButton.disabled = true;

    } else {

        previousButton.disabled = false;

    }


    if (currentQuestion === questions.length - 1) {

        nextButton.disabled = true;

    } else {

        nextButton.disabled = false;

    }

}


// ================= TIMER =================

function startTimer() {

    clearInterval(timerInterval);


    updateTimer();


    timerInterval = setInterval(function () {

        timeLeft--;

        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("Time is over! Your test will be submitted automatically.");

            submitTest();

        }

    }, 1000);

}


// ================= UPDATE TIMER =================

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;


    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");


    document.getElementById("timer").innerText =
        `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;

}


// ================= SUBMIT TEST =================

function submitTest() {

    if (!testStarted) {
        return;
    }


    const unanswered =
        userAnswers.filter(answer => answer === null).length;


    if (unanswered > 0 && timeLeft > 0) {

        const confirmSubmit =
            confirm(
                `You have ${unanswered} unanswered question(s).\n\nAre you sure you want to submit the test?`
            );


        if (!confirmSubmit) {

            return;

        }

    }


    clearInterval(timerInterval);

    testStarted = false;


    calculateResult();

}


// ================= CALCULATE RESULT =================

function calculateResult() {

    let answeredCount = 0;

    let correctCount = 0;

    let wrongCount = 0;


    questions.forEach((question, index) => {

        const userAnswer = userAnswers[index];


        if (userAnswer !== null) {

            answeredCount++;


            if (userAnswer === question.answer) {

                correctCount++;

            } else {

                wrongCount++;

            }

        }

    });


    const skippedCount =
        questions.length - answeredCount;


    const score =
        correctCount * MARKS_PER_QUESTION;


    const totalMarks =
        questions.length * MARKS_PER_QUESTION;


    const percentage =
        (score / totalMarks) * 100;


    showResult(
        answeredCount,
        skippedCount,
        correctCount,
        wrongCount,
        score,
        totalMarks,
        percentage
    );

}


// ================= SHOW RESULT =================

function showResult(
    answeredCount,
    skippedCount,
    correctCount,
    wrongCount,
    score,
    totalMarks,
    percentage
) {

    document.getElementById("test-screen").style.display =
        "none";


    document.getElementById("result-screen").style.display =
        "block";


    document.getElementById("result-name").innerText =
        studentName;


    document.getElementById("result-roll").innerText =
        rollNumber;


    document.getElementById("answered").innerText =
        `Answered: ${answeredCount}`;


    document.getElementById("skipped").innerText =
        `Skipped: ${skippedCount}`;


    document.getElementById("correct").innerText =
        `Correct: ${correctCount}`;


    document.getElementById("wrong").innerText =
        `Wrong: ${wrongCount}`;


    document.getElementById("score").innerText =
        `Score: ${score} / ${totalMarks}`;


    document.getElementById("percentage").innerText =
        `Percentage: ${percentage.toFixed(2)}%`;

}
