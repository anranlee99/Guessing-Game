//container for guesses
let prevGuesses = [];
let answer = null;

const displayGuesses = () => {
  const guessesEl = document.querySelector('.guesses')
  console.log(prevGuesses)
  guessesEl.textContent = '';
  prevGuesses.forEach(guess => {
    guessesEl.textContent += (guess + "\n");
  })
}

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', function(evt) {
  
  const inputEl = document.querySelector('#guessField');
  console.log("inputel.value: ", inputEl.value)
  if(inputEl.value !== ""){
    prevGuesses.push(inputEl.value);
  }
  guess = inputEl.value;
  displayGuesses();
  checkAnswer();
  inputEl.value = "";
  
});

const rangeBtn = document.querySelector('#range');
rangeBtn.addEventListener('click', function(evt) {
  
  const minEl = document.querySelector('#min');
  const maxEl = document.querySelector('#max');
  if(minEl.value && maxEl.value){
    play(minEl.value, maxEl.value)
  }
  minEl.value = '';
  maxEl.value = '';
});
console.log(document.querySelector('#min').value)

function checkAnswer(){
    if(guess>answer){
      document.getElementById('answer').innerText = "Your guess is too high!";
    } else if (guess < answer){
      document.getElementById('answer').innerText = "Your guess is too low!";
    } else {

      if(prevGuesses.length===1)
      {
        alert("Congratulations! You got it in " + prevGuesses.length + " guess!")
      } else {
        alert("Congratulations! You got it in " + prevGuesses.length + " guesses!")
      }

    }
}


function play(min, max){
  const game = {
    biggestNum: 100,
    smallestNum: 1,
    play: function() {
      return this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    }
  };

  if(min){
    game.smallestNum = min;
  }
  if(max){
    game.biggestNum = max;
  }

  answer = game.play();
  prevGuesses = [];
  console.log("answer: ", answer, "min: ", game.smallestNum, "max: ", game.biggestNum);
  let hintEL = document.getElementById('hint')
  hintEL.innerText = Math.ceil(Math.log2(game.biggestNum - game.smallestNum)) + 1;

  
  


}

play();