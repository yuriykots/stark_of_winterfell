var express = require('express')
var path = require('path')
var compression = require('compression')
import routes from './js/routes'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import NotFound from './js/Components/NotFound';

var app = express()

app.use(compression())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'static')))

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {

              if (err) {
                // there was an error somewhere during route matching
                res.status(500).send(err.message)
              } else if (redirect) {
                // not shure how to use it. Was in React tutorial.
                res.redirect(redirect.pathname + redirect.search)
              } else if (props) {
                // We get props, it means we matched route. No we can render our tree and pass it as markup

                const markup = renderToString(<RouterContext {...props}/>)
                res.render('index', { markup });
              } else {
                // no errors, no redirect, we just didn't match anything
                // rendering our notFound component

                res.status(404);
                const markup = renderToString(<NotFound/>)
                res.render('index', { markup });
              }

  })
})

var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
