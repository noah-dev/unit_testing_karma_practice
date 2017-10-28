var express = require('express');
var app = express();
var path = require('path');

// Server config
app.set('port', 5000);
app.set('host', '0.0.0.0');

app.use(express.static('./bower_components'))
app.use(express.static('./static'))

// Home page - angularjs client
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './home/index.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});