// Variables
let secretWord = '';
let playerGuess = '';
const maxGuesses = 0;
const guesses = document.querySelectorAll('.alphabet');
const inputField = document.querySelector('.inputField');
const inputBtn = document.querySelector('.inputBtn');
const wrongGuesses = document.querySelector('.wrongGuessesElement');
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
	let capitalizeSecretWord = inputField.value.toUpperCase();
	let secretWordArray = capitalizeSecretWord.split('');
	inputField.value = '';
	inputField.disabled = true;
	inputBtn.disabled = true;
	console.log(secretWordArray);
	return secretWordArray;
	//use array.length to create blank spaces for player to guess
}

function checkGuess(event) {
	event.target.disabled = true;
	playerGuess = event.target.innerText;
	console.log(playerGuess);
	// if (secretWordArray.includes(playerGuess)) {
	// 	console.log('True');
	// }
}

function checkWin() {
	console.log('win/lose');
}

function resetGame() {
	console.log('resetBtn');
}

function rules() {
	console.log('rulesBtn');
}
