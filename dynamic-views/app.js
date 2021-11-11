const express = require('express')
const app = express()

const port = 3000

const movies = require('./movies.json');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
	const todos = ['learn node', 'learn react', 'walk the dog']
	const someHTML = '<h1>This is html coming from the server</h1>'
	// before : res.sendFile()
	// if we use hbs: res.render(<name of the hbs file>, <object holding the data>)
	res.render('index', { user: 'Foo', password: '123', list: todos, heading: someHTML })
})

app.get('/movies', (req, res) => {
	res.render('movies', { movieList: movies })
})

app.listen(port, () => {
	console.log('listening on port 3000')
})