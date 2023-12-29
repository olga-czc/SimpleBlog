const express = require('express');

const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    
    // content type and status code set automatically
    res.send('<p>Home<p>');
});