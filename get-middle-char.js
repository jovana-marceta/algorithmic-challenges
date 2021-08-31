/*
You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

*/

function getMiddleChar(word) {

	if(word.length % 2 === 0) {
		return word.slice((word.length / 2 ) - 1, (word.length / 2) + 1);
	}
	return word[Math.floor(word.length / 2)];
}



