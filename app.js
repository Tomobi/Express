const express = require('express');
const app = express();
const port = 9000;


app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.use(express.static('public'));


app.use((req, res, next) => {
  const currentDay = new Date().getDay();
  const currentHour = new Date().getHours();

  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
    next(); 
  } else {
    res.send('This website is only available during working hours (Monday - Friday, 9am - 5pm).');
  }
});


app.get('/', (req, res) => {
  res.render('home', { page: 'Home' });
});

app.get('/services', (req, res) => {
  res.render('services', { page: 'Our Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { page: 'Contact Us' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});