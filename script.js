console.log('JS file connected');
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
