
var wins;
var losses;
var guessesleft;
var guessessofar;

// Create an array of words

  var words = ["eclair", 
  "crepe",  
  "macarons", 
  "meringues",  
  "napoleon", 
  "fondue", 
  "truffles"];

 // Pick a random word from the array 

var randomword = words[Math.floor(Math.random() * words.length)];

// document.write(randomword);   just for testing purposes


// set up the answer array

var answerArray = [];

  for (var i = 0; i < randomword.length; i++) {

    answerArray[i] = "_";
  }



// Show the player their progress

onkeyup = document.write(answerArray);


var remainingLetters = randomword.length;

while (remainingLetters > 0) {

    document.write(answerArray.join(" "));
}


  // get a guess from the player

 // Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.

 document.onkeyup = function(event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toLowerCase();
    
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
    
    
    