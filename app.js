const express = require('express');
const morgan = require('morgan');

const app = express();

// register view engine
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

// middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });

// logger
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    // content type and status code set automatically
    // res.send('<p>Home<p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

// redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});