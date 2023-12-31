const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://admin:qwert12345@nodeblog.nn3bhvv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

    // register view engine
app.set('view engine', 'ejs');


// listen for requests
// app.listen(3000);

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

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// // mongoose and mongo sand box
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// })

// app.get('/all-blogs', (req, res) => {
//    Blog.find()
//    .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('659c4b46ad649b8553015b29')
//     .then((result) => {
//          res.send(result)
//      })
//      .catch((err) => {
//          console.log(err)
//      });
//  });

app.get('/', (req, res) => {
    res.redirect('blogs');
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // // content type and status code set automatically
    // // res.send('<p>Home<p>');
    // // res.sendFile('./views/index.html', {root: __dirname});
    // res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

// redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

app.use('/blogs', blogRoutes);
// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});