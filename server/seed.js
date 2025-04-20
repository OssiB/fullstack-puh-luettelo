// server/seed.js
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/phonebook'
mongoose.connect(mongoUrl)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const initialPeople = [
  { name: 'Homer Simpson', number: '555-1234' },
  { name: 'Marge Simpson', number: '555-5678' },
  { name: 'Bart Simpson', number: '555-2468' },
]

await Person.deleteMany({})
await Person.insertMany(initialPeople)

console.log('Database seeded with test data!')
mongoose.connection.close()
