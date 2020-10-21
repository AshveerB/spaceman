// Variables
let wrongLetters = '';
let maxGuesses = 0;
let wrongLetterArray = [];
let correctLetterArray = [];
let secretWordArray = [];
const guesses = document.querySelectorAll('.alphabet');
const inputField = document.querySelector('.inputField');
const inputBtn = document.querySelector('.inputBtn');
const dashedWord = document.querySelector('.dashedWordElement');
const winElement = document.querySelector('.winElement');
const resetBtn = document.querySelector('.reset');
const rulesBtn = document.querySelector('.rules');
const numberOfWrongGuesses = document.querySelector('.numberOfWrongGuesses');
const secretWordElement = document.querySelector('.secretWordElement');
const wrongLetterElement = document.querySelector('.wrongLetterElement');

// Event Listeners
inputBtn.addEventListener('click', getSecretWord);
guesses.forEach((element) => {
	element.addEventListener('click', checkGuess);
});
resetBtn.addEventListener('click', resetGame);
rulesBtn.addEventListener('click', rules);

// Functions
function getSecretWord(event) {
	event.preventDefault();
	//restrict secret word to letters of alphabet, no numbers or special characters
	capitalizeSecretWord = inputField.value.toUpperCase();
	secretWordArray = capitalizeSecretWord.split('');
	inputField.value = '';
	inputField.disabled = true;
	inputBtn.disabled = true;
	for (let i = 0; i < secretWordArray.length; i++) {
		dashes = document.createElement('span');
		dashedWord.appendChild(dashes);
		dashes.innerText = '_ ';
	}
}

function checkGuess(event) {
	playerGuess = event.target.innerText;
	checkWin();
}

function checkWin() {
	if (!secretWordArray.includes(playerGuess)) {
		maxGuesses++;
		wrongLetterArray.push(playerGuess);
		wrongLetters = wrongLetterArray.join('');
	}
	if (secretWordArray.includes(playerGuess)) {
		correctLetterArray.push(playerGuess);
	}
	render();
}

function resetGame() {
	guesses.forEach((element) => {
		element.disabled = false;
	});
	inputField.disabled = false;
	inputBtn.disabled = false;
	maxGuesses = 0;
	secretWordArray = [];
	wrongLetterArray = [];
	correctLetterArray = [];
	numberOfWrongGuesses.innerText = 'X = 0';
	winElement.innerText = 'Keep Guessing!';
	secretWordElement.innerText = '';
	dashedWord.innerText = '';
	wrongLetterElement.innerText = '';
}

function render() {
	numberOfWrongGuesses.innerText = `X = ${maxGuesses}`;
	wrongLetterElement.innerText = `Incorrect Guesses: ${wrongLetters}`;
	if (maxGuesses == 7) {
		winElement.innerText = 'You Lose';
		guesses.forEach((element) => {
			element.disabled = true;
		});
	}
	// correct win logic
	if (correctLetterArray.length === secretWordArray.length) {
		winElement.innerText = 'You Win';
		guesses.forEach((element) => {
			element.disabled = true;
		});
		secretWordElement.innerText = `${capitalizeSecretWord}`;
	}
	// in checkwin() function
	// need to take guess and place into new array
	// with nested loops for correct index
	// or filter() method? for correcct placement
	//or split secret word into object with each letter in own array and reveal each charArray when guessed correctly?
	//indexOf(str, 0) and splice()?
	console.log(correctLetterArray);
	console.log(wrongLetterArray);
	console.log(secretWordArray);
	console.log(playerGuess);
}

function rules() {
	console.log('rulesBtn');
}
