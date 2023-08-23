const {createReadStream} = require('fs');

const stream = createReadStream('./content/big')

stream.on('data', (result) => {
    console.log(result)
});

stream.on('error', (err) => console.log(err));
