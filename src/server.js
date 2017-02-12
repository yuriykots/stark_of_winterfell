var express = require('express')
var path = require('path')
var compression = require('compression')
import routes from './js/routes'

var app = express()

app.use(compression())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'static')))

// send all requests to index.html so browserHistory works
//app.get('/view', function (req, res) {
  //res.render('index');
  //res.sendFile(path.join(__dirname, 'static', 'index.html'))
//})

app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // `RouterContext` is what the `Router` renders. `Router` keeps these
    // `props` in its state as it listens to `browserHistory`. But on the
    // server our app is stateless, so we need to use `match` to
    // get these props before rendering.
    const markup = renderToString(<RouterContext {...props}/>)

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
    res.render('index', { markup });
  })
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
