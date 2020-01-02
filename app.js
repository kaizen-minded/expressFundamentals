const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin', adminRouter);
app.use(userRouter);

app.use((req, res) => {
  res.status(400).sendFile(path.join(__dirname, 'views', '404.html'))
  // res.status(400).send('<h1>Page Not Found</h1>')
})
app.listen(3000, function(){
  console.log('Server listening on PORT 3000');
})