const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getAlbums = (request, response) => {
  pool.query('SELECT * FROM albuns', (error, results) => {
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
  console.log(`Server listening`)
})