const express = require('express')
const app = express()
const path = require('path')

const hostname = '127.0.0.1'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/html/index.html'))
})

app.use('/public', express.static(path.join(__dirname, 'public')));

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

