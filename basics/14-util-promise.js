const { readFile, writeFile } = require('fs').promises

const start = async () => {
	try{
		const first = await readFile('./content/first', 'utf-8');
		const second = await readFile('./content/second', 'utf-8');
        await writeFile('./content/result-promise', `This is awesome: ${first} ${second}`)
		console.log(first, second);
	}catch(error){
		console.log(error);
	}
};

start();
