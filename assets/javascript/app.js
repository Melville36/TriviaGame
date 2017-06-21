    //  Set a variable equal to the time to guess the trivia questions
    var number = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    // Create an array of questions
    var triviaQuestions = ["What year was Tecmo Bowl released?","Who was the best player on Tecmo Bowl?", "Who won the super bowl in the same year that Tecmo Bowl was released?"];


    //  Start the run function to decrement the count by 1 every 1 seconds
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
      
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timeRemaining").html(number);


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        $("#triviaQA").html("Time is Up!");

        //Show next question 
        nextQuestion();
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    

    $(document).ready(function(){
      questionOne();
      setTimeout(run, 1000);
      activateButtons();

    });

var randomQuestion = triviaQuestions[Math.floor(Math.random()*triviaQuestions.length)];
var selectedQuestion;
var questionNum1 = 0;
var questionNum2 = 0;
var questionNum3 = 0;
var firstQuestion = triviaQuestions[0];
var secondQuestion = triviaQuestions[1];
var thirdQuestion = triviaQuestions[2];

    function questionOne () {    

      // Set the html equal to the first question
      $("#triviaQA").html(firstQuestion + "<br>");

      //Set selected question equal firstQuestion
      selectedQuestion = firstQuestion;
      

      //Loop through answers array and create answer buttons
      var answers1 = ["1987", "1998", "2015", "1975"];
      for (var a = 0; a < answers1.length; a++){
          var answerButton = $("<button/>");
          // console.log(answerButton);
          answerButton.addClass("answerButtons");
          // console.log(answers1[a]);
          answerButton.attr("value", answers1[a]);
          answerButton.attr("name", answers1[a]);
          answerButton.text(answers1[a]);
          $("#triviaQA").append(answerButton);
        }
        //activateButtons();
        questionNum1 = 1;
    }
    
  function questionTwo () {    

      // Set the html equal to the first question
      $("#triviaQA").html(secondQuestion + "<br>");

      //Set selected question equal firstQuestion
      selectedQuestion = secondQuestion;
      

      //Loop through answers array and create answer buttons
      var answers2 = ["Bo Jackson", "Jerry Rice", "Barry Sanders", "John Elway"];
        for (var b = 0; b < answers2.length; b++){
          var answerButton = $("<button/>");
          // console.log(answerButton);
          answerButton.addClass("answerButtons");
          // console.log(answers2[b]);
          answerButton.attr("value", answers2[b]);
          answerButton.attr("name", answers2[b]);
          answerButton.text(answers2[b]);
          $("#triviaQA").append(answerButton);
        }
        //activateButtons();
        questionNum2 = 1;
    }

    function questionThree () {    

      // Set the html equal to the first question
      $("#triviaQA").html(thirdQuestion + "<br>");

      //Set selected question equal firstQuestion
      selectedQuestion = thirdQuestion;
      console.log(selectedQuestion);

      //Loop through answers array and create answer buttons
      var answers3 = ["New York Giants", "Cleveland Browns", "New England Patriots", "Denver Broncos"];
        for (var c = 0; c < answers3.length; c++){
          var answerButton = $("<button/>");
          // console.log(answerButton);
          answerButton.addClass("answerButtons");
          // console.log(answers3[c]);
          answerButton.attr("value", answers3[c]);
          answerButton.attr("name", answers3[c]);
          answerButton.text(answers3[c]);
          $("#triviaQA").append(answerButton);
        }
        //activateButtons();
        questionNum3 = 1;
    }

var correct = 0;
var incorrect = 0;

function activateButtons() {
  $(".answerButtons").on("click", function() { 
        //alert("In!");
        var chosenAnswer = ($(this).attr("value"));
        //console.log(selectedQuestion);
        //console.log(chosenAnswer);
        if (chosenAnswer == "1987"){
            correct++;
            nextQuestion();
          }
        if (chosenAnswer == "Bo Jackson") {
            correct++;
            nextQuestion();
          } 
        if (chosenAnswer = "New York Giants") {
            correct++;
            nextQuestion();
          }


        else {
            incorrect++;
            nextQuestion();
          }
  
      });
 
  }

  function correctGuess () {
      correct++;
  }

  function incorrectGuess () {
    
  }

  function nextQuestion() {
    if (questionNum2 == 0){
          questionTwo();
          number = 30;
          run();
        } 

    else if (questionNum3 == 0){
          questionThree();
          number = 30;
          run();
        } 

    else if (questionNum3 == 1) {
          gameResults();
      }
  }

  function calcResults (){
    var percentCorrect = ((correct/3) * 100);
    $("#triviaQA").html("Correct Answers: " + correct + "<br>" + "Incorrect Answers: " + incorrect + "<br>" + "Percent Correct: " + percentCorrect + "%" + "<br>" + "Game will restart in 10 seconds!");
    setTimeout(reset,10000);
  }

  function gameResults () {
    calcResults();
  }


  /////////////////////////////////////////////////////////////////
  /////// Reset Game

  function reset () {

}
 