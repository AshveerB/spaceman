// Variables
let wrongLetters = '';
let answer = '';
let maxGuesses = 0;
let wrongLetterArray = [];
let correctLetterArray = [];
let secretWordArray = [];
let answerArray = [];
let capitalizeSecretWord = '';
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

// Functions.l
function getSecretWord(event) {
	event.preventDefault();
	capitalizeSecretWord = inputField.value.toUpperCase();
	secretWordArray = capitalizeSecretWord.split('');
	inputField.value = '';
	inputField.disabled = true;
	inputBtn.disabled = true;
	winElement.innerText = 'Keep Guessing!';
	for (let i = 0; i < secretWordArray.length; i++) {
		dashes = document.createElement('span');
		dashedWord.appendChild(dashes);
		dashes.innerText = '_ ';
	}
}

function checkGuess(event) {
	if (inputField.disabled === true) {
		playerGuess = event.target.innerText;
		checkWin();
	} else {
		winElement.innerText = 'Pick a word for your friend to guess!';
	}
}

function checkWin() {
	if (!secretWordArray.includes(playerGuess)) {
		maxGuesses++;
		wrongLetterArray.push(playerGuess);
		wrongLetters = wrongLetterArray.join('');
	}
	if (secretWordArray.includes(playerGuess)) {
		for (let j = 0; j < secretWordArray.length; j++) {
			if (secretWordArray[j] === playerGuess) {
				answerArray[j] = playerGuess;
			}
			if (answerArray[j] !== secretWordArray[j]) {
				answerArray[j] = '_';
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
	wrongLetters = '';
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
		inputField.disabled = true;
		inputBtn.disabled = true;
		secretWordElement.innerText = `${capitalizeSecretWord}`;
	}
}

function rules() {
	console.log('rulesBtn');
}
