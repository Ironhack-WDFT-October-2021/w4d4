const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
	title: {
		type: String,
		unique: true
	},
	author: String,
	pages: Number,
	released: Date,
	genre: String
})

// const bookSchema = mongoose.Schema({
// 	title: {
// 		type: String,
// 		required: true
// 	},
// 	author: {
// 		type: String,
// 		maxLength: 50
// 	},
// 	pages: {
// 		type: Number,
// 		max: 7000
// 	},
// 	inStock: {
// 		type: Boolean,
// 		default: true
// 	},
// 	genre: {
// 		type: String,
// 		enum: ['Fiction', 'History']
// 	}
// })

const Book = mongoose.model('Book', bookSchema)

mongoose.connect('mongodb://localhost/mongoose-introduction')
	.then(() => console.log('connected'))
	.catch(err => console.log(err))

// CRUD operations - create read update delete 
// list of queries: https://mongoosejs.com/docs/queries.html


// create a book with the passed properties
// Book.create({
// 	author: 'Franz Kafka',
// 	title: 'Der Prozess'
// })
// 	.then(bookFromDB => console.log(bookFromDB))
// 	.catch(err => console.log(err))

// Book.insertMany() - here we can also pass an array

// READ
// get all the books from the collection find() with no query object
// Book.find()
// 	.then(books => console.log(books))

// find the first match

// Book.findOne({ author: 'Franz Kafka' })
// 	.then(book => console.log(book))

// retrieve a book by the id

// Book.findById('618d390924730c1c19ac45a6')

// UPDATE

// if you want the updated instance returned -> {new: true}
// Book.findOneAndUpdate({ title: 'Das Schloss' }, { pages: 300 }, { new: true })
// 	.then(book => console.log(book))

// updateMany()
// findByIdAndUpdate()

// DELETE

// Book.findOneAndDelete({ title: 'Das Schloss' })
// 	.then(book => console.log(book))

const userSchema = mongoose.Schema({
	name: {
		type: String,
		set: value => {
			return value
				.split(' ')
				.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())
				.join(' ')
		}
	}
})
const User = mongoose.model('User', userSchema)
User.create({ name: 'joHn pETer mILLer' })
	.then(user => {
		console.log(user)
		mongoose.connection.close()
	})
	.catch(err => console.log(err))