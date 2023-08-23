var http = require('http');
var fs = require('fs');

http.createServer( function (request, response) {
	// const text = fs.readFileSync('./content/big', 'utf8')

	const fileStream = fs.createReadStream('./content/big', 'utf8');
	fileStream.on('open', () => fileStream.pipe(response));
	fileStream.on('error', (err) => response.end(err));

}).listen(5000)
