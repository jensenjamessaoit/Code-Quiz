//variables
var score = 0;
var questionIndex = 0;
var time = 30;
var timer;

//start selectors
var startPrompt = document.getElementById('quiz_start');
var startButton = document.getElementById('start_button');

//question and answer selectors
var quizContainer = document.getElementById('quiz');
var questionContainer = document.getElementById('question_container');
var choiceContainer = document.getElementById('choice_container');

//end selector
var endPrompt = document.getElementById('quiz_end');
var endRetry = document.getElementById('GO_AGAIN');
var finalScore = document.getElementById('final_score');

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
    //resets counters
    score = 0;
    questionIndex = 0;
    // hides start prompt
    startPrompt.style.display = 'none';
    endPrompt.style.display = 'none';
    quizContainer.style.display = 'block';

    // makes question start
    displayQuestion();
}

function displayQuestion(){
    if(questionIndex < questionArray.length){
        //current question
        var curQ = questionArray[questionIndex];
        //display question
        questionContainer.textContent = curQ.question;

        //clear choices
        choiceContainer.innerHTML = '';
        //display choices
        for(let i = 0; i < curQ.choice.length; i++){
            var button = document.createElement('button');
            button.textContent = curQ.choice[i];
            button.addEventListener('click', function(){checkAnswer(curQ.choice[i])});
            choiceContainer.appendChild(button);
        }
    }
    else{
        endQuiz();
    }
}

function checkAnswer(answer){
    var curQ = questionArray[questionIndex];
    if(answer === curQ.answer){
        console.log(`${questionIndex + 1} correct`);
        score++;
    }
    else{
        console.log(`${questionIndex + 1} wrong`);
    }
    questionIndex++;
    displayQuestion();
}

function endQuiz(){
    quizContainer.style.display = 'none';
    endPrompt.style.display = 'block';
    finalScore.textContent = `${score}`;
}


//start quiz event listener
startButton.addEventListener('click', startQuiz);

//end quiz event listener
endRetry.addEventListener('click', startQuiz);