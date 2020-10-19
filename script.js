console.log('JS file connected');
// Check secret word for guess
let secretWord = 'test';
let capitalizeSecretWord = secretWord.toUpperCase();
let secretWordArray = capitalizeSecretWord.split('');
console.log(secretWordArray);
let playerGuess = 'E';
if (secretWordArray.includes(playerGuess)) {
	console.log(playerGuess);
}
playerGuess = 'A';
console.log('got here');

// Grab Buttons to check letter guess
const guesses = document.querySelectorAll('.alphabet');

guesses.forEach((element) => {
	element.addEventListener('click', checkGuess);
});

function checkGuess(event) {
	event.target.disabled = true;
	console.log(event.target.innerText);
}

//Grab secret word from form
const inputField = document.querySelector('.inputField');
const inputBtn = document.querySelector('.inputBtn');

inputBtn.addEventListener('click', getSecretWord);

function getSecretWord(event) {
	event.preventDefault();
	console.log(inputField.value);
}

// Win condition
