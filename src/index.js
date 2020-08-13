const express = require('express');
const path = require('path');

const authRouter = require('./routers/auth');

const app = express();

// middlewares
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/smoothies', (req, res) => {
  res.render('smoothies');
});

app.use(authRouter);

app.listen(5000, () => {
  console.log('listining...');
});
