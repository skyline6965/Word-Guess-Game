// create an array
var wordList = ["quick", "fast", "track"];
// choose word randomly
var randNum = Math.floor(Math.random() * wordList.length);
var choosenWord = wordList[randNum];
var correctWord = [];
var wrongWord = [];
var underScore = []; 
var wins = [];
var docUnderScore = document.getElementsByClassName("answers"); 
// ^^^^ used getElementbyID, and was unsuccessful. Changed the HTML and the JS to "Class Name" and worked. Whats the difference??
var docLttrsGuessed = document.getElementsByClassName("userGuess");


// console.log(randNum);

console.log(choosenWord);
// create underscores based on length of word
var generateUnderScore = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');        
    }
    return underScore;
}


// get users guess

document.addEventListener('keypress', (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    // console.log(keyword);
    if(choosenWord.indexOf(keyword) > -1) {
        correctWord.push(keyword);
        
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docLttrsGuessed[0].innerHTML = correctWord;
            if(underScore.join('') == choosenWord) {
                alert('You win');
                // document.getElementsByClassName('wins').innerHTML = "Wins: " + i++;
            }
    }
    else {wrongWord.push(keyword);
        
    }
});

docUnderScore[0].innerHTML = generateUnderScore().join(' ');

