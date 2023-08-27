const express = require('express')
const app = express()
let { people } = require('./data')

app.use(express.static('./form-example'));

app.get('/api/people', (req, res) => {
	res.status(200).json({success: true, data: people})
})

//  parse form data.
app.use(express.urlencoded({ extended:false }))

app.post('/login/', (req, res) => {
	const { name } = req.body
	if(name){
		return res.status(200).send(`Welcome ${name}!`)
	}

	res.status(401).send('Please provide credentials.')
})

app.listen(5000, () => {
	console.log('server is listening on port 5000...')
})
