const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require('express-rate-limit')

const app = express()

app.use(helmet())
app.use(compression())

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5 // 5 requests,
})

app.use(limiter)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const isProduction = process.env.NODE_ENV === 'production'
const origin = {
  origin: isProduction ? 'https://node-auto-deploy.herokuapp.com' : '*',
}

app.use(cors(origin))

const getAlbums = (request, response) => {
  pool.query('SELECT * FROM albums', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addAlbum = (request, response) => {
  const { artist, title } = request.body

  pool.query('INSERT INTO albums (artist, title) VALUES ($1, $2)', [artist, title], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Album added.' })
  })
}

app
  .route('/albums')
  // GET endpoint
  .get(getAlbums)
  // POST endpoint
  .post(addAlbum)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening')
})