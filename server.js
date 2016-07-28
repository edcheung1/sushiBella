'use strict'

var express = require('express');
var routes = require('./src/routes/index.js');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(process.cwd() + '/src'));

routes(app);

app.listen(app.get('port'), function() {
	console.log('Node app is running on port ', app.get('port'));
})