const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./test-app/public'))

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './test-app/index.html'))
})

app.all('*', (req, res) => {
	res.status(404).send('resouce not found')
})

app.listen(5000, () => {
	console.log('server is listening on port 5000...')
})
