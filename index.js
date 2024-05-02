const express = require('express')
const app = express()
const port = 3333
const path = require('path')

const items = [ 'pizza', 'burger', 'brownie', 'ice cream', 'hot-dog' ]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/object', (req, res) => {
  res.json(items);
})

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/example', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'example.html' ))
})

//middleware
app.get('/middle/:number', (req, res, next) => {
  console.log('Request URL: ', req.originalUrl)
  next()
}, (req, res, next) => {
  logger()
  next()
}, (req, res) => {
  res.send(`middleware ${req.params.number}`)
})
function logger() {
  console.log('Middleware logger!');
}

//EJS
app.set('view engine', 'ejs');
app.set('views', './views')
app.get('/ejs', (req, res) => {
  res.render('example', { items })
})


app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}/`);
})

