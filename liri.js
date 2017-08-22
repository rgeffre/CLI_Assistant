var spotify = require('spotify');

/*write code to take in one of the following commands

spotify-this-song
do-what-it-says */

//Require package
var Twitter = require('twitter');
//This code sets a new variable to contain the data from keys.js
var config = require('./keys');
//This constructor passes the data in the keys file to the twitter API
var myTweets = new Twitter(config.twitterKeys);
//my-tweets displays my last 20 tweets in the terminal window
{
  myTweets.get('statuses/user_timeline',
      {count: 20},
      function(error, tweets, response) {
        console.log(tweets);
        if (error) {
          console.log(error);
        }
      })
}

//node liri.js spotify-this-song '<song name here>'  This will show
//Artists, song name, preview link of the song from spotify, album

/* var spotify = require('spotify');
var spotifyThisSong = new spotify( {
  clientId: 'ba8e76d10d424a80bba36fee7c6cbdad',
  clientSecret: 'af354c971b66413e8ee827331aeee4e1',
  redirectUri: 'http://www.example.com/callback'
});

//get user input for song name

 spotify.search('type: tracks', query: ' songTitle', function(error, data, response)

"name:"
"album:"
"artists"
"preview_url"*/

//If no song is provided the program defaults to "The Sign" by Ace of Base


//require the request package
var request = require('request');
///store the arguments in an array
var nodeArgs = process.argv;
//create an empty variable to hold the movie name
var movieThis = "";
//loop through the words in the node argument and create a for loop
for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieThis = movieThis + "+" + nodeArgs[i];
  }
  else {
    movieThis += nodeArgs[i];
  }
}
//Use request to query the OMDB database with the movie name specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieThis + "&plot=short&imdb=true&tomatoes=true&apikey=40e9cece&";

request(queryUrl, function(error, response, body) {
  if (movieThis === null ) {
    console.log('If you haven\'t watched "Mr. Nobody," then you\n' +
        'should: http://www.imdb.com/title/tt0485947\n' +
        'It\'s on Netflix!');
  }else {
    if (!error && response.statusCode === 200) {
      console.log('Title:' + JSON.parse(body).Title);
      console.log('Release Year:' + JSON.parse(body).Year);
      console.log('Actors:' + JSON.parse(body).Actors);
      console.log('Country:' + JSON.parse(body).Country);
      console.log('Language:' + JSON.parse(body).Language);
      console.log('Ratings:' + 'Source:' + 'Internet Movie Database' +
          JSON.parse(body).Ratings);
      console.log('Ratings:' + 'Source:' + 'Rotten Tomatoes' +
          JSON.parse(body).Ratings);
      console.log('Plot:' + JSON.parse(body).Plot);
    }
  }}
);

//node liri.js do-what-it-says use the fs node package to take
//the contents of random.txt and use it to call one of liri's
//commands to run spotify-this-song "I want it that Way"
