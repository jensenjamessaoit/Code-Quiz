//variables
var score = 0;
var questionIndex = 0;

//start selectors
var startPrompt = document.getElementById('quiz_start');
var startButton = document.getElementById('start_button');

//question and answer selectors
var questionContainer = document.getElementById('question_container');
var choiceContainer = document.getElementById('choice_container');

// question array
const questionArray = [
    q1 = {
        question: 'Inside which HTML element do we put the JavaScript?',
        answer: '<script>', 
        choice: ['<javascript>','<script>','<js>','<scripting>'],
    },
    q2 = {
        question: 'What is the correct JavaScript syntax to write "Hello World"?',
        answer: 'document.write("Hello World")',
        choice: ['response.write("Hello World")','"Hello World"','document.write("Hello World")','("Hello World")']
    },
    q3 = {
        question: 'Where is the correct place to insert a JavaScript?',
        answer: 'Both the <head> section and the <body> section are correct',
        choice: ['The <body> section','Both the <head> section and the <body> section are correct','The <head> section'],
    },
    q4 = {
        question: 'An external JavaScript must contain the <script> tag',
        answer: 'False',
        choice: ['True', 'False'],
    },
    q5 = {
        question: 'How do you write "Hello World" in an alert box?',
        answer: 'alert("Hello World")',
        choice: ['alert("Hello World")','msgBox("Hello World")','alertBox="Hello World"','alertBox("Hello World")'],
    },
];

//start quiz function
function startQuiz() {
    questionIndex = 0;
    // hides start prompt
    startPrompt.style.visibility = 'hidden';
}

function shuffleArray(array) {
    for(var i = (array.length -1); i > 0; i--) {
        var rng = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[rng];
        array[rng] = temp;
    }
    var shuffledArray = array;
    return shuffledArray;
}


//start quiz event listener
startButton.addEventListener('click', startQuiz);