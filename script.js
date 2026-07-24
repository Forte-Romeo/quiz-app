// ===== QUIZ QUESTIONS ===== //
const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: [
            "Python",
            "Java",
            "JavaScript",
            "C++"
        ],
        answer: "JavaScript"
    },

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Transfer Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which CSS property changes text color?",
        options: [
            "font-color",
            "background-color",
            "color",
            "text-color"
        ],
        answer: "color"
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "##",
            "**"
        ],
        answer: "//"
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Apple",
            "Netscape",
            "Google"
        ],
        answer: "Netscape"
    },

    {
        question: "How do you declare a variable in modern JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "Both let and const"
        ],
        answer: "Both let and const"
    },

    {
        question: "Which method prints something to the browser console?",
        options: [
            "console.log()",
            "print()",
            "echo()",
            "write()"
        ],
        answer: "console.log()"
    },

    {
        question: "Which keyword creates a function?",
        options: [
            "method",
            "define",
            "function",
            "func"
        ],
        answer: "function"
    },

    {
        question: "Which operator checks strict equality?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "What is the DOM?",
        options: [
            "Database Object Model",
            "Document Object Model",
            "Digital Object Manager",
            "Display Object Method"
        ],
        answer: "Document Object Model"
    }
];

// ===== ELEMENTS ===== //
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

const currentQuestionText = document.getElementById("current-question");
const totalQuestionsText = document.getElementById("total-questions");

const progressBar = document.getElementById("progress-bar");

const scoreText = document.getElementById("score-text");
const percentageText = document.getElementById("percentage-text");

const timerElement = document.getElementById("timer");

// ===== VARIABLES ===== //
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timeLeft = 300;
let timer;

// ===== START QUIZ ===== //
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    currentQuestion = 0;
    score = 0;

    timeLeft = 300;

    totalQuestionsText.textContent = quizData.length;

    startTimer();
    loadQuestion();
}

// ===== LOAD QUESTION ===== //
function loadQuestion() {
    nextBtn.disabled = true;
    selectedAnswer = null;
    answerButtons.innerHTML = "";

    const currentQuiz = quizData[currentQuestion];
    currentQuestionText.textContent = currentQuestion + 1;
    questionText.textContent = currentQuiz.question;

    currentQuiz.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(button, option));

        answerButtons.appendChild(button);
    });

    updateProgressBar();
}

// ===== SELECT ANSWER ===== //
function selectAnswer(button, option) {
    if (selectedAnswer !== null) return;
    selectedAnswer = option;
    nextBtn.disabled = false;

    const correctAnswer = quizData[currentQuestion].answer;
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (option === correctAnswer) {
        score++;
    } 
    else {
        button.classList.add("wrong");
    }
}