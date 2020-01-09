const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const hbs = require('express-handlebars');

const adminData = require('./routes/admin');
const userRouter = require('./routes/shop');

const app = express();
app.set('view engine', 'ejs');
// app.engine('hbs', hbs()); for handlebars templating
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug'); for pug templating

app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(userRouter);

app.use((req, res) => {
  res.status(400).render('404', {pageTitle: 'Error Page'})
  // res.status(400).sendFile(path.join(__dirname, 'views', '404.html'))
  // res.status(400).send('<h1>Page Not Found</h1>')
})
app.listen(3000, function(){
  console.log('Server listening on PORT 3000');
})