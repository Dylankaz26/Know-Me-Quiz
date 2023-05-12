var containerQuestionEl = document.getElementById("question-container");
var containerHomeEl = document.getElementById("home-container");
var containerEndEl = document.getElementById("end-container")
var containerScoreEl = document.getElementById("score-banner")
var formInitials = document.getElementById("initials-form")
var containerHighScoresEl = document.getElementById("high-score-container")
var ViewHighScoreEl = document.getElementById("view-high-scores")
var listHighScoreEl = document.getElementById("high-score-list")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
var btnStartEl = document.querySelector("#start-game");
var btnGoBackEl = document.querySelector("#go-back")
var btnClearScoresEl = document.querySelector("#clear-high-scores")
var questionEl = document.getElementById("question")
var answerbuttonsEl = document.getElementById("answer-buttons")
var timerEl = document.querySelector("#timer");
var score = 0;
var timeleft;
var gameover
timerEl.innerText = 0;


var HighScores = [];

  
var arrayShuffledQuestions
var QuestionIndex = 0




var questions = [
  { q: 'What is my favorite animal?', 
    a: '4. Lion', 
    choices: [{choice: '1. Dog'}, {choice: '2. Shark'}, {choice: '3. Cardinal'}, {choice: '4. Lion'}]
  },
  { q: 'Where would I most want to live out of these choices?', 
    a: '3. Seattle', 
    choices: [{choice: '1. Miami'}, {choice: '2. Paris'}, {choice: '3. Seattle '}, {choice: '4. New York City'}]
  },
  { q: 'What are my two middle initials?', 
    a: '1. KM', 
    choices: [{choice: '1. KM'}, {choice: '2. NK'}, {choice: '3. LM'}, {choice: '4. none of the above'}]
  },
  
  { q: 'What school year would I want to relive?', 
    a: '3. 6th', 
    choices: [{choice: '1. 8th'}, {choice: '2. 11th'}, {choice: '3. 6th'}, {choice: '4. 9th'}]
  },
  { q: 'What is my favorite holiday besides Christmas?', 
    a: '2. New Years Eve', 
    choices: [{choice: '1. Halloween'}, {choice: '2. New Years Eve'}, {choice: '3. Thanksgiving'}, {choice: '4. Valentines Day'}]
  },
  { q: 'What do I want to cross off my bucket list?', 
    a: '2. Go on a date with a celebrity', 
    choices: [{choice: '1. Skydive'}, {choice: '2. Go on a date with a celebrity'}, {choice: '3. Visit all 50 states'}, {choice: '4. Get a tattoo'}]
  },
  { q: 'What would I name my first daughter?', 
    a: '4. Malia', 
    choices: [{choice: '1. Selena'}, {choice: '2. Ashley'}, {choice: '3. Layla'}, {choice: '4. Malia'}]
  },

  { q: 'What is my favorite color?', 
  a: '1. Red', 
  choices: [{choice: '1. Red'}, {choice: '2. Blue'}, {choice: '3. White'}, {choice: '4. Gray'}]
  },
  { q: 'What do I want the most?', 
    a: '3. Family to live forever', 
    choices: [{choice: '1. Money'}, {choice: '2. Fame'}, {choice: '3. Family to live forever'}, {choice: '4. Soulmate'}]
  },
  { q: 'Rank my top 4 favorite music artist in order ?', 
    a: '2. 1-Justin Bieber, 2-Bryson Tiller, 3-Drake, 4-Morgan Wallen', 
    choices: [{choice: '1. 1-Bryson Tiller, 2-Drake, 3-Morgan Wallen, 4-Justin Bieber'}, {choice: '2. 1-Justin Bieber, 2-Bryson Tiller, 3-Drake, 4-Morgan Wallen'}, {choice: '3. 1-Morgan Wallen,2-Justin Bieber, 3-Bryson Tiller, 4-Drake'}, {choice: '4. 1-Drake, 2-Morgan Wallen, 3-Justin Bieber, 4-Bryson Tiller'}]
  },
  { q: '?', 
  a: '3. ', 
  choices: [{choice: '1. '}, {choice: '2. '}, {choice: '3. '}, {choice: '4. '}]
  }
];

var renderStartPage = function () {
  containerHighScoresEl.classList.add("hide")
  containerHighScoresEl.classList.remove("show")
  containerHomeEl.classList.remove("hide")
  containerHomeEl.classList.add("show")
  containerScoreEl.removeChild(containerScoreEl.lastChild)
  QuestionIndex = 0
  gameover = ""
  timerEl.textContent = 0 
  score = 0

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide")
  }
  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
  }
}

var setTime = function () {
  timeleft = 60;

var timercheck = setInterval(function() {
  timerEl.innerText = timeleft;
  timeleft--

  if (gameover) {
      clearInterval(timercheck)
  }
 
  if (timeleft < 0) {
      showScore()
      timerEl.innerText = 0
      clearInterval(timercheck)
  }

  }, 1000)
}

var startGame = function() {
  containerHomeEl.classList.add('hide');
  containerHomeEl.classList.remove('show');
  containerQuestionEl.classList.remove('hide');
  containerQuestionEl.classList.add('show');
  arrayShuffledQuestions = questions;
  setTime()
  setQuestion()
}


var setQuestion = function() {
  resetAnswers()
  displayQuestion(arrayShuffledQuestions[QuestionIndex])
}


var resetAnswers = function() {
  while (answerbuttonsEl.firstChild) {
      answerbuttonsEl.removeChild(answerbuttonsEl.firstChild)
  };
};


var displayQuestion = function(index) {
  questionEl.innerText = index.q
  for (var i = 0; i < index.choices.length; i++) {
      var answerbutton = document.createElement('button')
      answerbutton.innerText = index.choices[i].choice
      answerbutton.classList.add('btn')
      answerbutton.classList.add('answerbtn')
      answerbutton.addEventListener("click", answerCheck)
      answerbuttonsEl.appendChild(answerbutton)
      }
  };

var answerCorrect = function() {
  if (correctEl.className = "hide") {
      correctEl.classList.remove("hide")
      correctEl.classList.add("banner")
      wrongEl.classList.remove("banner")
      wrongEl.classList.add("hide")
      }
  }  

var answerWrong = function() {
  if (wrongEl.className = "hide") {
      wrongEl.classList.remove("hide")
      wrongEl.classList.add("banner")
      correctEl.classList.remove("banner")
      correctEl.classList.add("hide")
  }
}

   
var answerCheck = function(event) {
  var selectedanswer = event.target
      if (arrayShuffledQuestions[QuestionIndex].a === selectedanswer.innerText){
          answerCorrect()
          score = score + 10
      }


  
    QuestionIndex++
      if  (arrayShuffledQuestions.length > QuestionIndex + 1) {
          setQuestion()
      }   
      else {
         gameover = "true";
         showScore();
          }
}

 
var showScore = function () {
  containerQuestionEl.classList.add("hide");
  containerEndEl.classList.remove("hide");
  containerEndEl.classList.add("show");

  var scoreDisplay = document.createElement("p");
  scoreDisplay.innerText = ("Your final score is " + score + "!");
  containerScoreEl.appendChild(scoreDisplay);
}       


var createHighScore = function(event) { 
  event.preventDefault() 
  var initials = document.querySelector("#initials").value;
  if (!initials) {
    alert("Enter your intials!");
    return;
  }

formInitials.reset();

var HighScore = {
initials: initials,
score: score
} 


HighScores.push(HighScore);
HighScores.sort((a, b) => {return b.score-a.score});


while (listHighScoreEl.firstChild) {
 listHighScoreEl.removeChild(listHighScoreEl.firstChild)
}

for (var i = 0; i < HighScores.length; i++) {
var highscoreEl = document.createElement("li");
highscoreEl.ClassName = "high-score";
highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
listHighScoreEl.appendChild(highscoreEl);
}

saveHighScore();
displayHighScores();

}

var saveHighScore = function () {
  localStorage.setItem("HighScores", JSON.stringify(HighScores))
      
}


var loadHighScore = function () {
  var LoadedHighScores = localStorage.getItem("HighScores")
      if (!LoadedHighScores) {
      return false;
  }

  LoadedHighScores = JSON.parse(LoadedHighScores);
  LoadedHighScores.sort((a, b) => {return b.score-a.score})


  for (var i = 0; i < LoadedHighScores.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.ClassName = "high-score";
      highscoreEl.innerText = LoadedHighScores[i].initials + " - " + LoadedHighScores[i].score;
      listHighScoreEl.appendChild(highscoreEl);

      HighScores.push(LoadedHighScores[i]);
      
  }
}  


var displayHighScores = function() {

  containerHighScoresEl.classList.remove("hide");
  containerHighScoresEl.classList.add("show");
  gameover = "true"

  if (containerEndEl.className = "show") {
      containerEndEl.classList.remove("show");
      containerEndEl.classList.add("hide");
      }
  if (containerStartEl.className = "show") {
      containerStartEl.classList.remove("show");
      containerStartEl.classList.add("hide");
      }
      
  if (containerQuestionEl.className = "show") {
      containerQuestionEl.classList.remove("show");
      containerQuestionEl.classList.add("hide");
      }

  if (correctEl.className = "show") {
      correctEl.classList.remove("show");
      correctEl.classList.add("hide");
  }

  if (wrongEl.className = "show") {
      wrongEl.classList.remove("show");
      wrongEl.classList.add("hide");
      }
  
}

var clearScores = function () {
  HighScores = [];

  while (listHighScoreEl.firstChild) {
      listHighScoreEl.removeChild(listHighScoreEl.firstChild);
  }

  localStorage.clear(HighScores);

} 

loadHighScore()
  

btnStartEl.addEventListener("click", startGame)

formInitials.addEventListener("submit", createHighScore)

ViewHighScoreEl.addEventListener("click", displayHighScores)

btnGoBackEl.addEventListener("click", renderStartPage)

btnClearScoresEl.addEventListener("click", clearScores)