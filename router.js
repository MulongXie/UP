
function router() {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    app.use(express.static(__dirname + '/img'));

    app.get('/', function (req, res) {
        res.sendfile(__dirname + '\\index.html');
        // res.send('aaa')
    });

    app.listen(80, function () {
        console.log('Server created with port: 80\n');
    });
}

router();