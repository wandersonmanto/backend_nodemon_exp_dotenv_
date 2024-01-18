const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (request, response) => {
  response.send('teste..')
})

app.get('/teste', (request, response) => {
  response.send('<h1>teste 2</h1>')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running!!!')
})
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })