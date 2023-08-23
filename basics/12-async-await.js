const { readFile } = require('fs');

const getText = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, 'utf8', (err, data) =>{
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		});
	});
};

const start = async () => {
	try{
		const first = await getText('./content/first');
		const second = await getText('./content/second');
		console.log(first, second);
	}catch(error){
		console.log(error);
	}
};

start();
