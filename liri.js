var cmd = process.argv[2];
var cmd2 = process.argv[3];

var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var movieDB = require('moviedb')('cee1c5d1dfa35faf1c03da413bc82995');
var fs = require('fs');

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

function getTwitter(){
	client.get('statuses/user_timeline',{screen_name: 'CLTWebDev', count: 20},function(error, tweets, response){
		if(error) throw error;
		for(var i = 0; i < tweets.length; i++){
			console.log('================');
			console.log(tweets[i].text);
			console.log(tweets[i].created_at);
			console.log('================');
		}
	})	
}

function getSpotify(){
	if(cmd2){
		spotify.search({type: 'track', query: cmd2}, function(error, data){
			if(error) throw error;
			console.log(data.tracks.items[0].album.artists[0].name);
			console.log('=============');	
			console.log(data.tracks.items[0].name);	
			console.log('=============')
			console.log(data.tracks.items[0].preview_url);
			console.log('=============');
			console.log(data.tracks.items[0].album.name);
		})
	}else {
		spotify.lookup({type: 'track', id: '0hrBpAOgrt8RXigk83LLNE'}, function(error, data){
			if(error) throw error;
			console.log('');
			console.log('You didn\'t put a song title in, so here you go:');
			console.log('');
			console.log(`Artist: ${data.album.artists[0].name}`);
			console.log('=============');	
			console.log(`Song title: ${data.name}`);	
			console.log('=============')
			console.log(`Preview URL: ${data.preview_url}`);
			console.log('=============');
			console.log(`Album: ${data.album.name}`);
			console.log('');
		})
	}	
}

function getMovies(){
	if(cmd2){
		movieDB.searchMovie({query: cmd2 }, function(error, data){
			if(error) throw error;
			console.log('');
		  	console.log(`Title: ${data.results[0].title}`);
		  	console.log('=============');
		  	console.log(`Year: ${data.results[0].release_date}`);
		  	console.log('=============');
			console.log(`Rating: ${data.results[0].vote_average}`)
			console.log('=============');  	
			console.log(`Language: ${data.results[0].original_language}`);
		  	console.log('=============');
			console.log(`Plot: ${data.results[0].overview}`);
			console.log('');		
		});			
	}else {
		movieDB.searchTv({query: 'Mr. Robot' }, function(error, data){
			if(error) throw error;
			console.log('');
			console.log('You didn\'t put a movie in, so here you go: ');
			console.log('');
		  	console.log(`Title: ${data.results[0].original_name}`);
		  	console.log('=============');
		  	console.log(`Year: ${data.results[0].first_air_date}`);
		  	console.log('=============');
			console.log(`Rating: ${data.results[0].vote_average}`)
			console.log('=============');  	
			console.log(`Language: ${data.results[0].original_language}`);
		  	console.log('=============');
			console.log(`Plot: ${data.results[0].overview}`);
			console.log('');		
		});
	}
}

switch(cmd) {

	case 'my-tweets':
		getTwitter();
	break;

	case 'spotify-this-song':
		getSpotify();
	break;

	case 'movie-this':
		getMovies();
	break;

	case 'do-what-it-says':
	fs.readFile("random.txt", "UTF-8", function(error, data){
		if (error) throw error;
		data = data.split(',');
		console.log(data);
	})

}






