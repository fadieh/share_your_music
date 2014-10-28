var server = require('express')();
var http = require('http').createServer(server);

server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');

server.get('/', function(request, response){
	response.render('index')
});

server.post('/', function(request, response){
	var uri = request.query.uri;
	var comment = request.query.comment;
	var genre = request.query.genre;
	console.log("Song posted")
})

server.listen(3000, function(){
	console.log("Listening on port 3000")
	console.log('uri')
});
