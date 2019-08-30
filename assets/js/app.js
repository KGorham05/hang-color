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
        },
        lavender: {
            hex: 'E6E6FA'
        },
        violet: {
            hex: 'EE82EE'
        },
        fuchsia: {
            hex: 'FF00FF'
        },
        indigo: {
            hex: '4B0082'
        },
        chartreuse: {
            hex: '7FFF00'
        },
        olive: {
            hex: '808000'
        },
        teal: {
            hex: '008080'
        },
        cyan: {
            hex: '00FFFF'
        },
        aquamarine: {
            hex: '7FFFD4'
        },
        turquoise: {
            hex: '40E0D0'
        },
        navy: {
            hex: '000080'
        },

        // add brown white and grey colors
        // https://htmlcolorcodes.com/color-names/
    },

    // call this function when the page first loads. 
    setupGame: function () {
        // pick a random word
        var objectKeys = Object.keys(this.wordsToPick);
        this.wordInPlay = objectKeys[Math.floor(Math.random() * objectKeys.length)];
        console.log(this.wordInPlay);
        // split the word into individual letters
        this.lettersOfTheWord = this.wordInPlay.split("");

        // Build the view of the word - starts as blanks
        this.rebuildWordView();

        // update background color css to wordInPlay
        document.body.style.background = `linear-gradient(to right, ${this.wordInPlay}, grey)`;
        // TODO - Add a secondary color to each wordToPick, use that rather then grey for second gradient color

        this.processUpdateTotalGuesses();
        this.setInitialGuesses();
    },

    // call this function whenever a user guesses a letter...
    updatePage: function (letter) {
        console.log(letter);
        // if the user has no guesses left, restart the game
        if (this.guessesLeft === 0) {
            this.restartGame();
        } else {
            // check for and handle incorrect guesses
            this.updateGuesses(letter);

            // check for and handle correct guesses
            this.updateMatchedLetters(letter);

            // rebuild the view of the word - 
            this.rebuildWordView();

            // If the user wins, restart the game.
            if (this.updateWins() === true) {
                this.restartGame();
            }
        }

    },

    // This function sets the initial guesses the user gets
    setInitialGuesses: function () {
        // set number of guesses equal to letters in the word + 5
        this.guessesLeft = this.lettersOfTheWord.length + 5; 

        
    },

    // run this func to check for a wrong letter
    updateGuesses: function (letter) {
        // check if we guessed this letter already
        if ((this.guessedLetters.indexOf(letter) === -1) && 
        // check if the letter is in the lettersOfTheWord array
        (this.lettersOfTheWord.indexOf(letter) === -1)) {
            console.log('wrong letter!');

            // Add the letter to the guessedLetters array.
            this.guessedLetters.push(letter);
            
            // Decrement guessesLeft
            this.guessesLeft--;

            // Update guesses left and guessed letters on the DOM
            document.getElementById('guessesLeft').textContent = this.guessesLeft;
            document.getElementById('guessedLetters').textContent = this.guessedLetters.join(', ');

        }
    },

    // This function sets the initial guesses the user gets.
    processUpdateTotalGuesses: function () {
        // The user will get more guesses the longer the word is.
        this.totalGuesses = this.lettersOfTheWord.length + 5;
        // Update the guesses left 
        this.guessesLeft = this.totalGuesses;

        // Render the guesses left to the page.
        document.getElementById("guessesLeft").innerHTML = this.guessesLeft;
    },

    // run this function when a user guesses correctly
    updateMatchedLetters: function (letter) {

    },

    // builds the display of the word currently being guessed
    // ex. if the color is "salmon" it might display "S_lm_ _"
    rebuildWordView: function () {

        
    },

    // function that restarts the game by resetting all of the variables. 
    restartGame: function () {
        document.getElementById('guessedLetters').innerHTML = "";
        // reset global variables    
        this.wordInPlay = null,
        this.lettersOfTheWord = [],
        this.matchedLetters = [],
        this.guessedLetters = [],
        this.guessesLeft = 0,
        this.totalGuesses = 0,
        this.letterGuessed = null,
        this.wins = 0
    },

    // function that checks to see if the user has won the game
    updateWins: function () {

    },

};

// Set up the game on page load
wordGuessGame.setupGame();

// listen for keypress
document.onkeyup = function (event) {
    // check if the key pressed is a letter
    if (event.keyCode >= 49 && event.keyCode <= 90) {
        //capture the key pressed and make it lowercase
        wordGuessGame.letterGuessed = event.key.toLowerCase();
        // pass the guessed letter into our updatePage function to run game logic
        wordGuessGame.updatePage(wordGuessGame.letterGuessed);
    }

};