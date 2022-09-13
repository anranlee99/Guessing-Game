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
  let minNum = (parseInt(minEl.value));
  let maxNum = (parseInt(maxEl.value));
  if(minNum && maxNum){
    play(minNum, maxNum)
  }
  minEl.value = null;
  maxEl.value = null;
});
console.log(document.querySelector('#min').value)

function checkAnswer(){
  console.log("v1")
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
  let biggestNum = 100;
  let smallestNum = 1;


  if(min){
    smallestNum = min;
  }
  if(max){
    biggestNum = max;
  }

  answer = Math.floor(Math.random() * (biggestNum - smallestNum + 1)) + smallestNum;
  prevGuesses = [];
  console.log("answer: ", answer, "min: ", smallestNum, "max: ", biggestNum);
  let hintEL = document.getElementById('hint')
  hintEL.innerText = Math.ceil(Math.log2(biggestNum - smallestNum)) + 1;

  
  


}

play();