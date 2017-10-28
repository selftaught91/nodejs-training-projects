
var express = require('express');

var app = express();

    app.get('/feedback', function (req, res) {
        res.send('Hello People. Are You enjoying the session');
    });



app.listen(3000, function () {
    console.log('Feedback app listening on port 3000!');
});

