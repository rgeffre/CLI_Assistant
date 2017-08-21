//require packages

var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
/*write code to take in one of the following commands
my-tweets
spotify-this-song
movie-this
do-what-it-says */


//spotify client id ba8e76d10d424a80bba36fee7c6cbdad
//spotify client secret af354c971b66413e8ee827331aeee4e1

//node liri.js my-tweets should show my last 20 tweets
//and when they were created in the terminal window

//write the code to export the data from keys.js
//store the keys in a variable and pass it to twitter
var config = require('./keys');
var mytweets = new Twitter(config);

mytweets.get('statuses/user_timeline', {screen_name: 'onewithnature', count: 20}, function(err, data) {
  console.log(data);
});




//node liri.js spotify-this-song '<song name here>'  This will show
//Artists, song name, preview link of the song from spotify, album

//If no song is provided the program defaults to "The Sign" by Ace of Base

//write the code for liri.js movie-this '<movie name here>'

/*
Output for movie-this:
Title
Year Released
IMDB Rating
Rotten Tomatoes Rating
Country where produced
Lanuage of the movie
Plot of the movie
Actors in the movie
 */

//if the user does not type a movie in, output
/*
If you haven't watched "Mr. Nobody," then you
should: http://www.imdb.com/title/tt0485947
It's on Netflix!
 */

//Use the request package to retrieve data from OMDB API
//use API key 40e9cece

//node liri.js do-what-it-says use the fs node package to take
//the contents of random.txt and use it to call one of liri's
//commands to run spotify-this-song "I want it that Way"
