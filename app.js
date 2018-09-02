const express = require('express')
const app = express()

let reviews = [
    { title: "Great Review" },
    { title: "Next Review" }
]

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//   res.render('home', { msg: 'Hello World!' });
// })

app.get('/', (req, res) => {
    res.render('reviews-index', { reviews: reviews });
})
