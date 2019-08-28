// Create an object to hold the game logic and variables
var wordGuessGame = {

    // initialize all game variables
    wordInPlay: null,
    lettersOfTheWord: [],
    matchedLetters: [],
    guessedLetters: [],
    guessesLeft: 0,
    totalGuesses: 0,
    letterGuessed: null,
    wins: 0,

    wordsToPick: {
        salmon: {
            hex: 'CD5C5C'
        },
        crimson: {
            hex: 'DC143C'
        },
        hotpink: {
            hex: 'FF69B4'
        },
        tomato: {
            hex: 'FF6347'
        },
        orange: {
            hex: 'FFA500'
        },
        gold: {
            hex: 'FFD700'
        },
        khaki: {
            hex: 'F0E68C'
        }
    },

    // call this function when the page first loads. 
    setupGame: function() {
        // pick a random word
        var objectKeys = Object.keys(this.wordsToPick);
        this.wordInPlay = objectKeys[Math.floor(Math.random() * objectKeys.length)];
        // split the word into individual letters
        this.lettersOfTheWord = this.wordInPlay.split("");
        // display a _ for each letter in the word
        
    },
    
    // call this function whenever a user guesses a letter...
    updatePage: function(letter) {
        // listen for keypress 
        // if the user has no guesses left, restart the game
        //else
        // check for and handle incorrect guesses
        // check for and handle correct guesses
        // rebuild the view of the word - 
        // guessed letters are revealed, non guessed letters have a "_"
    },
    
    // This function sets the initial guesses the user gets
    setInitialGuesses: function() {
        // set number of guesses equal to letters in the word + 5
        // display number of guesses on a page
        
    },

    // run this func when a user guesses a wrong letter
    updateGuesses: function(letter) {

    },

    // run this function when a user guesses correctly
    updateMatchedLetters: function(letter) {

    },

    // builds the display of the word currently being guessed
    // ex. if the color is "salmon" it might display "S_lm_ _"
    rebuildWordView: function() {

    },

    // function that restarts the game by resetting all of the variables. 
    restartGame: function() {
        // reset global variables 
    },

    // function that checks to see if the user has won the game
    updateWins: function() {

    },

};

// Set up the game on page load
wordGuessGame.setupGame();

// listen for keypress
document.onkeyup = function(event) {
    // check if the key pressed is a letter
    if (event.keyCode >= 49 && event.keyCode <= 90) {
        //capture the key pressed and make it lowercase
        wordGuessGame.letterGuessed = event.key.toLocaleUpperCase();
        // pass the guessed letter into our updatePage function to run game logic
        wordGuessGame.updatePage(wordGuessGame.letterGuessed);
    }
    
};