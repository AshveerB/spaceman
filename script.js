// Variables
let wrongLetters = '';
let answer = '';
let maxGuesses = 7;
let wrongLetterArray = [];
let correctLetterArray = [];
let secretWordArray = [];
let answerArray = [];
let capitalizeSecretWord = '';
const one = document.querySelector('.one');
const guesses = document.querySelectorAll('.alphabet');
const inputField = document.querySelector('.inputField');
const inputBtn = document.querySelector('.inputBtn');
const dashedWord = document.querySelector('.dashedWordElement');
const winElement = document.querySelector('.winElement');
const resetBtn = document.querySelector('.reset');
const numberOfWrongGuesses = document.querySelector('.numberOfWrongGuesses');
const secretWordElement = document.querySelector('.secretWordElement');
const wrongLetterElement = document.querySelector('.wrongLetterElement');
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

// Event Listeners
inputBtn.addEventListener('click', getSecretWord);
guesses.forEach((element) => {
	element.addEventListener('click', checkGuess);
});
resetBtn.addEventListener('click', resetGame);
openBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

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
		maxGuesses--;
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
	inputField.value = one.innerText;
	inputBtn.disabled = false;
	maxGuesses = 7;
	secretWordArray = [];
	wrongLetterArray = [];
	correctLetterArray = [];
	numberOfWrongGuesses.innerText = 'Guesses Left = 7';
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
	numberOfWrongGuesses.innerText = `Guesses Left = ${maxGuesses}`;
	wrongLetterElement.innerText = `Incorrect Guesses: ${wrongLetters}`;
	if (maxGuesses == 0) {
		winElement.innerText = 'You Lose';
		guesses.forEach((element) => {
			element.disabled = true;
		});
	}
	if (answerArray.join('') === secretWordArray.join('')) {
		winElement.innerText = 'You Win';
		confetti.start(5000);
		guesses.forEach((element) => {
			element.disabled = true;
		});
		inputField.disabled = true;
		inputBtn.disabled = true;
		secretWordElement.innerText = `${capitalizeSecretWord}`;
	}
}

function closeModal() {
	modal.style.display = 'none';
}

function openModal() {
	modal.style.display = 'block';
}
