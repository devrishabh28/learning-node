const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first', 'utf8', (err, result) => {
	if(err){
	console.log(err);
	}

	const first = result;
	
	readFile('./content/second', 'utf8', (err, result) => {
		if(err){
		console.log(err);
		}

		const second = result;

		writeFile('./content/result-async', `Here is the result! : ${first}, ${second}`, (err, result) => {
			if(err){
				console.log(err);
			}

			console.log('done with writing');
		});
	});
});

console.log('finished');
