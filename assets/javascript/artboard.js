var name = prompt("What's your name?");
console.log("Hello " + name);


1.    Pick a random word.

2.    Take the player’s guess.

3.    Quit the game if the player wants to.

4.    Check that the player’s guess is a valid letter.

5.    Keep track of letters the player has guessed.

6.    Show the player their progress.

7.    Finish when the player has guessed the word.

http://apprize.info/javascript/kids/7.html


ambrosia
danish pastry
waffles
tiramisu
baked alaska
blizzard
custard
cheesecake
trifle
gingerbread cookie
tres leches cake
sno balls
buckeye
butterscotch
nanaimo bar




  // Create an array of words

  var words = [

    "javascript",

    "monkey",

    "amazing",

    "pancake"

  ];

  // Pick a random word

  var word = words[Math.floor(Math.random() * words.length)];

  // Set up the answer array

  var answerArray = [];

  for (var i = 0; i < word.length; i++) {

    answerArray[i] = "_";

  }

  var remainingLetters = word.length;

  // The game loop

  while (remainingLetters > 0) {

    // Show the player their progress

    alert(answerArray.join(" "));

    // Get a guess from the player

    var guess = prompt("Guess a letter, or click Cancel to stop

playing.");

    if (guess === null) {

      // Exit the game loop

      break;

    } else if (guess.length !== 1) {

      alert("Please enter a single letter.");

    } else {

      // Update the game state with the guess

      for (var j = 0; j < word.length; j++) {

        if (word[j] === guess) {

          answerArray[j] = guess;

          remainingLetters--;

        }

      }

    }

  // The end of the game loop

  }

  // Show the answer and congratulate the player

  alert(answerArray.join(" "));

  alert("Good job! The answer was " + word);


  
document.getElementById('someDiv').onkeyup = function() {
  alert('clicked!');
}

var remainingLetters = randomword.length;
  }

  // The game loop

  while (remainingLetters > 0) {
    document.write(answerArray.join(" "));
  }





  // get a guess from the player

 // Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.

document.onkeyup = function(event) {

  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var letter = String.fromCharCode(event.which).toLowerCase();
  
  }
  
  if (guess === null) {
  
      // Exit the game loop
  
      break;
  
    } 
    else if (guess.length !== 1) {
  
      alert("Please enter a single letter.");
  
    } 
    else {
  
      // Update the game state with the guess
  
      for (var j = 0; j < randomword.length; j++) {
  
        if (randomword[j] === guess) {
  
          answerArray[j] = guess;
  
          remainingLetters--;
  
        }
  
      }
  
    }
  
  // The end of the game loop
  
  }
  
  
  if playerguess
  addEventListener('onkeyup', playerguess);
  
  function processOnkeyup(evt) {
      document.body.innerHTML = correct player guess
  }
  
  
  
  // Display wrong guesses
  document.getElementById("wrongguess").addEventListener("onkeyup", displaywrongguess);
  
  function displaywrongguess() {
  
  }
  
  
  
  
  
   
   
   
