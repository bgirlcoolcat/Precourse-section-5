$(document).ready(function() {

	var counter = 0;
	var questionLock = false;
	

	$('#quizBut').hide();
/*
   	$("#game1").append('<div class="questionText">Q1</div><div id="1" class="option">answer 1a</div><div id="2" class="option">answer 1b</div><div id="3" class="option">answer 1c</div></div>');
*/
    $('.option').mouseenter(function() {
        $(this).fadeTo('fast', 1);
        });
    $('.option').mouseleave(function() {
        $(this).fadeTo('fast', 0.5);
        });

    $('.option').click(function() {
    if(questionLock == false) { questionLock = true;
	//correct answer
	if(this.id == "1") {
	$("#game1").append('<div class="feedback1">&#10004 CORRECT</div>');
	counter++;
	}
	//wrong answer
	if(this.id != "1") {
	$("#game1").append('<div class="feedback2">&#10008 INCORRECT</div>');
	}

	$('button').toggle('slow');

    }})

  	$("#finalScore").append('<div id="#finalScore">You have finished this pop quiz<br><br>Total questions: 3<br>Correct answers: '+ counter +'</div>');
  
    });