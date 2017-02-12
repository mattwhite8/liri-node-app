var cmd = process.argv[2];
var keys = require('./keys.js');
var Twitter = require('twitter');


var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

switch(cmd) {

	case 'my-tweets':
	client.get('statuses/user_timeline',{screen_name: 'CLTWebDev', count: 20},function(error, tweets, response){
		if(error) throw error;
		for(var i = 0; i < tweets.length; i++){
			console.log('================');
			console.log(tweets[i].text);
			console.log(tweets[i].created_at);
			console.log('================');
		}
	})
	break;
	
}

