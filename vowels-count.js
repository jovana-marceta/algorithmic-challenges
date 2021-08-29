function getCount(str) {
	let vowelsCount = 0;
	
	const vowels = "aeiou";
	
	for(let elem of str){
		if(vowels.includes(elem)) {
			vowelsCount++;
		}
	}

	return vowelsCount;
}