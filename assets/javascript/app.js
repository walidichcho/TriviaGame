
$(document).ready(function () {

    //I set the container that has all questions to hide as default.
    // the first page that will show is the title and start button.
    // when we click in start button the questions and done button will shows

    let StartButton = document.getElementById("start-btn")
    let QuestionContainer = document.getElementById('question-container')
    StartButton.addEventListener("click", StartGame);

    function StartGame() {
        c = 20;
        StartButton.classList.add('hide')
        QuestionContainer.classList.remove('hide')
    }

    // set timer for 20 second for all quiz.
    // intervals will run indefinitely until you clear them, using clearInterval()
    // create an interval that is going to subtract one to the count each second
    // call the clearInterval function to stop it from running

    var myInterval = setInterval(function () {
        console.log("log this every second");
    }, 1000);

    clearInterval(myInterval);

    var c = 20;

    var myCounter = setInterval(function () {
        c = c - 1;
        if (c < 20) {
            time001.innerHTML = "Time: " + c;
        }
        if (c < 1) {
            window.clearInterval(myCounter);
            alert("Sorry,times is up!!!!");

            myFunction();
        }

    }, 1000);

    //create a function that when we click done will calculate all result.
    //and hide all questions.
    //shows the result.
    //calculate correct answers
    //calculate uncorrect answer 
    //show a message how the user did.

    let DoneButton = document.getElementById("done-btn")
    DoneButton.addEventListener("click", myFunction);

    function myFunction() {

        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var question5 = document.quiz.question5.value;

        var correct = 0;

        if (question1 == "Colombia") {
            correct++;
            console.log(question1);
        }
        if (question2 == "Salt Lake City") {
            correct++;
        }
        if (question3 == "Frankford") {
            correct++;
        }

        if (question4 == "Carson City") {
            correct++;

        }
        if (question5 == "Little Rock") {
            correct++;

        }


        var message = ["Great Job!!!!", "Just ok!!!", "You really need to do better!!!"];

        var score;
        if (correct < 1) {
            score = 2;
        }
        if (correct > 0 && correct < 4) {
            score = 1;
        }
        if (correct > 2) {
            score = 0;
        }

        var incorrect = 4 - correct;

        document.getElementById("message").innerHTML = message[score];
        document.getElementById("aftersubmit").style.visibility = "visible";
        document.getElementById("totalcorrect").innerHTML = "Correct answers: " + correct;
        document.getElementById("totalincorrect").innerHTML = "incorrect answers: " + incorrect;

        $('#question-container').hide();
        $('#aftersubmit').show();
        window.clearInterval(myCounter);


    }

});
