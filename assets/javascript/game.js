// create an array
var wordList = ["thundercat", "ruturama", "riddick"];
// choose word randomly
var randNum = Math.floor(Math.random() * wordList.length);
var choosenWord = wordList[randNum];
console.log(choosenWord);
console.log(randNum);
var underScore = [];
console.log(choosenWord);

var generateUnderScore = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderScore());




// var wins = [];
// var userGuess = [];
// var correctGuess = [];
// var remainingGuesses = [];

// console.log(wordList);
// console.log(wins);
// console.log(userGuess);
// console.log(correctGuess);
// console.log(remainingGuesses);

// document.onkeyup = function() {
//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    


// function runGame(arr) {
         
//     for (var i = 0; i < wordList.length; i++){
//         if (userGuess === wordList[i]) {
//             console.log("Congrats ");            
//         }
//         else {
//             console.log("Guess again ");
//         }
//     }
// }
// }







// onkeyup event that checks the wordList.
// create array of words
// 

