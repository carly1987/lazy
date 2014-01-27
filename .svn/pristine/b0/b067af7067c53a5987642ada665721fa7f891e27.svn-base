var express = require('express');
var http = require('http');
/*var mongo = require('./lib/mongo');*/
var port = process.env.APP_PORT;
var webot = require('./lib/weixin');
var routes = require('./routes');
 
var app = express();
app.set('port', process.env.APP_PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.cookieParser());
app.use(express.session({ secret: 'abced111', store: new express.session.MemoryStore() }));
app.get('/', routes.index);
webot.watch(app, { token: 'layzer', path: '/wechat' });
require('./rules')(webot);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});