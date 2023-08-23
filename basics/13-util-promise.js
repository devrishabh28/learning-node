const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
	try{
		const first = await readFilePromise('./content/first', 'utf-8');
		const second = await readFilePromise('./content/second', 'utf-8');
        await writeFilePromise('./content/result-promise', `This is awesome: ${first} ${second}`)
		console.log(first, second);
	}catch(error){
		console.log(error);
	}
};

start();
