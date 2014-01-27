var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var webot = require('./lib/weixin');
var port = process.env.APP_PORT;
var app = express();
var MemcacheStore = require('connect-memcache')(express);
app.configure(function(){
	app.set('port', process.env.APP_PORT);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'assets')));
	app.use(express.cookieParser());
    app.use(express.session({
    	secret: 'baiducloud',
    	store: new MemcacheStore
    }));
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/mongo', routes.test);
webot.watch(app, { token: 'layzer', path: '/wechat' });
require('./rules')(webot);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
