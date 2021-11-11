const express = require('express')
const app = express()
const hbs = require('hbs')


const port = 3000

const movies = require('./movies.json');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
	res.render('movies', { movieList: movies, doctitle: 'Home Page' })
})

app.get('/godfather', (req, res) => {
	const godfather = movies.find((function (movie) {
		return movie.title === 'The Godfather'
	}))
	console.log(godfather)
	res.render('movieDetails', { movie: godfather, doctitle: 'Detail Page' })
})

app.listen(port, () => {
	console.log('listening on port 3000')
})