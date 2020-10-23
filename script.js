// Variables
let wrongLetters = '';
let answer = '';
let maxGuesses = 0;
let wrongLetterArray = [];
let correctLetterArray = [];
let secretWordArray = [];
let answerArray = [];
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
	// correct win dash render
	if (secretWordArray.includes(playerGuess)) {
		for (let j = 0; j < secretWordArray.length; j++) {
			if (secretWordArray[j] === playerGuess) {
				answerArray[j] = playerGuess;
			}
		}
		answer = answerArray.join(' ');
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
	answerArray = [];
	playerGuess = '';
	answer = '';
}

function render() {
	secretWordElement.innerText = `${answer}`;
	numberOfWrongGuesses.innerText = `X = ${maxGuesses}`;
	wrongLetterElement.innerText = `Incorrect Guesses: ${wrongLetters}`;
	if (maxGuesses == 7) {
		winElement.innerText = 'You Lose';
		guesses.forEach((element) => {
			element.disabled = true;
		});
	}
	if (answerArray.join('') === secretWordArray.join('')) {
		winElement.innerText = 'You Win';
		guesses.forEach((element) => {
			element.disabled = true;
		});
		secretWordElement.innerText = `${capitalizeSecretWord}`;
	}
	console.log(correctLetterArray);
	console.log(wrongLetterArray);
	console.log(secretWordArray);
	console.log(playerGuess);
	console.log(answerArray);
}

function rules() {
	console.log('rulesBtn');
}
