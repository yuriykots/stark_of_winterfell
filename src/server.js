var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'static')))

// send all requests to index.html so browserHistory works
app.get('/view', function (req, res) {
  res.render('index');
  //res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
