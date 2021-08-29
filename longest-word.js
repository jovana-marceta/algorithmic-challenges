function LongestWord(sen) { 

	sen = sen.trim();
	sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');

	let array =  sen.split(' ');

	let longest = "";

	array.forEach(word => {

		if(word.length > longest.length) {
			longest = word;
		}

	});

	return longest;
}