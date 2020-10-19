// Variables
let maxGuesses = 0;
const guesses = document.querySelectorAll('.alphabet');
const inputField = document.querySelector('.inputField');
const inputBtn = document.querySelector('.inputBtn');
const secretWord = document.querySelector('.secretWordElement');
const winElement = document.querySelector('.winElement');
const resetBtn = document.querySelector('.reset');
const rulesBtn = document.querySelector('.rules');

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
	console.log(secretWordArray);
}

//use array.length to create blank spaces for player to guess

function checkGuess(event) {
	event.target.disabled = true;
	playerGuess = event.target.innerText;
	console.log(playerGuess);
	checkWin();
}

function checkWin() {
	if (!secretWordArray.includes(playerGuess)) {
		maxGuesses++;
	}
	if (maxGuesses == 7) {
		console.log('You Lose');
		guesses.forEach((element) => {
			element.disabled = true;
		});
		winElement.innerText = 'You Lose';
	}
}

function resetGame() {
	guesses.forEach((element) => {
		element.disabled = false;
	});
	inputField.disabled = false;
	inputBtn.disabled = false;
	maxGuesses = 0;
	secretWordArray = [];
	playerGuess = '';
}

function rules() {
	console.log('rulesBtn');
}
