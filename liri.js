//require packages
var Twitter = require('twitter');
var SpotifyWebApi = require('spotify-web-api-node');

/*write code to take in one of the following commands

spotify-this-song
movie-this
do-what-it-says */


//node liri.js my-tweets should show my last 20 tweets
//and when they were created in the terminal window

//write the code to export the data from keys.js
//store the keys in a variable and pass it to twitter

var config = require('./keys');
var myTweets = new Twitter(config.twitterKeys);
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

/* var SpotifyWebApi = require('spotify-web-api-node');
var spotifyThisSong = new SpotifyWebAPI( {
  clientId: 'ba8e76d10d424a80bba36fee7c6cbdad',
  clientSecret: 'af354c971b66413e8ee827331aeee4e1',
  redirectUri: 'http://www.example.com/callback'
});*/

/*"name:"
"album:"
"artists"
"preview_url"*/

//If no song is provided the program defaults to "The Sign" by Ace of Base

//write the code for liri.js movie-this '<movie name here>'
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
var queryUrl = "http://www.omdbapi.com/?t=" + movieThis + "&plot=short&apikey=40e9cece&";
//helps to debug against URL
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200){
    console.log("Title:" + JSON.parse(body).Title);
    console.log("Release Year:" + JSON.parse(body).Year);
    console.log("Actors:" + JSON.parse(body).Actors);
    console.log("Country:" + JSON.parse(body).Country);
    console.log("Language:" + JSON.parse(body).Language);
    console.log("Ratings:" + "Source:" + "Internet Movie Database" + JSON.parse(body).Ratings);
    console.log("Ratings:" + "Source:" + "Rotten Tomatoes" + JSON.parse(body).Ratings);
    console.log("Plot:" + JSON.parse(body).Plot);
  }
});


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
