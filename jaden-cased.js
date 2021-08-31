/*
Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

// helper function to capitalize each word
function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function toJadenCase(str) {

	// Convert string to array
	let words = str.split(" ");
	let result = [];

	for(let word of words) {
		result.push(capitalize(word));
	}

	// Convert array back to string. join() is opposite of slice()
	return result.join(" ");

}

console.log(toJadenCase("today is beautiful day"));