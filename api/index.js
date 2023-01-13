const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/test', (req, res) => {
  console.log('Express is here...')
  res.json({ message: 'yayyy' })
})

app.use((req, res) => {
  // log the full path
  console.log('404:', req.originalUrl)
  res.redirect(301, '/')
})
app.use((req, res, next) => {
  // console.log(req);
  // console.log("500 error " + new Date().getTime());
  res.status(500).send('500 - Internal Server Error')
})

module.exports = app
