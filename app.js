const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    
    // content type and status code set automatically
    // res.send('<p>Home<p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// 404 page
app.use((req, res) => {
    res.status(404).render('404');
});