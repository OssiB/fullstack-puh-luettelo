const http = require('http')
const express = require('express')
const app = express()
const morgan = require('morgan');
const cors = require('cors')



const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

  
  app.use(cors())
app.use(requestLogger)
app.use(express.json())
app.use(morgan('tiny'));
morgan.token('body', (req) => {
    return req.method === 'POST' ? JSON.stringify(req.body) : '';
  });
  
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
  
let phoneNumbers= [
      {
        "name": "Martti Tienari",
        "number": "040-123456",
        "id": "2"
      },
      {
        "name": "Arto Järvinen",
        "number": "040-123456",
        "id": "3"
      },
      {
        "name": "Lea Kutvonen",
        "number": "040-123456",
        "id": "4"
      },
      {
        "name": "Ossi Bister",
        "number": "040 77 00532",
        "id": "5"
      }
    ]
  app.get('/info', (request, response) => {
    const date = new Date()
    const info = `<h3>Phonebook has info for ${phoneNumbers.persons.length} people<br>${date}</h3>`
    response.send(info)
  })
  app.get('/api/persons', (request, response) => {
    response.json(phoneNumbers)
  })
  app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id

    const person = phoneNumbers.find(person => person.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })
  app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    phoneNumbers = phoneNumbers.filter(note => note.id !== id)
    response.status(204).end()
  })
  const generateId = () => {
    const maxId = phoneNumbers.length > 0
      ? Math.max(...phoneNumbers.map(n => Number(n.id)))
      : 0
    return String(maxId + 1)
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
   if (phoneNumbers.find(person => person.name === body.name || person.number === body.number)) {
      return response.status(400).json({ 
        error: 'name or number must be unique' 
      })
    }
    const person = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    phoneNumbers = phoneNumbers.concat(phoneNumbers)
  
    response.json(person) 
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})