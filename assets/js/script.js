//Accessing some elements in the HTMLto hide and display a 
//Start Screen
var startScreen = document.getElementById("gameStart");
var currentQuestion = document.getElementById("questionNumber");

//variable to iterate through the array of questions
var i = 0;

//correct answer counter, incremented in the answerCompare function
var playerScore = 0;

//Array of objects containing questions
//and possible answers -- The idea was to use the one array with 
//its object elements to display questions and answers, and have
//an answer key within it. 
var questions = [
    {q: "Question to be answered with three listed choices",
     a: "answerOne", b: "answerTwo", c: "answerThree", 
     correct: "A"
    },
    {q: "Second Question",
     a: "answerOne", b: "answerTwo", c: "answerThree", 
     correct: "answermatch"
    },
    {q: "Third Question",
     a: "answerOne", b: "answerTwo", c: "answerThree", 
     correct: "answermatch"
    },
    {q: "Fourth Question",
     a: "answerOne", b: "answerTwo", c: "answerThree", 
     correct: "answermatch"
    },
    {q: "Fifth Question",
     a: "answerOne", b: "answerTwo", c: "answerThree", 
     correct: "answermatch"
    }
   
];

//This function hides the start screen in the HTML
//and then executes the displayQuestion function
var playTheGame = function(){
    currentQuestion.style.display = "none";
    document.getElementById("start").addEventListener("click", function(event){
        event.preventDefault();
        displayQuestion();
    })
};

//function call
playTheGame();


// Display Question:
// How the questions and answers will be presented to the user. 
// It would trigger a timer upon each call, as well as dynamically
//create elements to display questions and answers. 
//It would then call an answer comparison function. 
var displayQuestion = function(){
    startScreen.style.display = "none";
    //Timer goes here
    //questionTimer();
    document.getElementById("game-Area").innerHTML= "<h2 id='theQuestion'> QUESTION: " + questions[i].q + "</h2>" + "<ul><li id='aChoice choiceA'>"+ questions[0].a +"</li><li id='choiceB'>" + questions[0].b + "</li><li id='choiceC'>"+ questions[0].c +"</li></ul>";
    
    //answerCompare();
    //

        
};


//Next Question
//If the array is traversed to the end, the gameover screen displays
//otherwise, i is incremented, and the next question is displayed.
var nextQuestion = function(){
    if(questions[i] < questions.length){
        i++;
        return displayQuestion();
    } else {
        return gameOver();
    }

};


//Game Over
//Will display the game over screen which will
//detail the users score and allow for input
//of their initials to local storage
//
var gameOver = function(){
    var playAgain = confirm("Would you like to play again? ");
        if(playAgain === true){
            displayQuestion();
        } else {
            alert("Goodbye!");
        }


};

//Timer for each question set to 15 seconds
var questionTimer = function(){
    setTimeout(outOfTime, 15000);
};


//// The function to compare playerChoice with the answer key///
//// within the questions array. ////

// function answerCompare(){
//     if (playerChoice === true && questions[i].correct === 'A'){
//         playerScore++;
//         var x = document.getElementById("game-Area");
//         x.querySelector(".playingGame").innerHTML = "CORRECT!"
//      
        //return nextQuestion();

