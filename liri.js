//Require packages
var Twitter = require('twitter');
var request = require('request');
var spotify = require('node-spotify-api');
var fs = require('fs');
var inquirer = require('inquirer');

//Write inquirer code that allows users to select which task they want to do
//based on selection run the corresponding code
//If no song is provided the program defaults to "The Sign" by Ace of Base
//if no movie title is passed in

//node liri.js do-what-it-says use the fs node package to take
//the contents of random.txt and use it to call one of liri's
//commands to run spotify-this-song "I want it that Way"


//Write code using the twitter package to return 20 tweets and display them
//in the console with the date created.

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

var nodeArgs = process.argv;
var spotifyThisSong = "";

//loop through the words in the node argument and create a for loop
for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    spotifyThisSong = spotifyThisSong + "+" + nodeArgs[i];
  }
  else {
    spotifyThisSong += nodeArgs[i];
  }
}
//construct to connect to api and pass in credentials
var spotify = new spotify ( {
  id: 'ba8e76d10d424a80bba36fee7c6cbdad',
  secret: 'af354c971b66413e8ee827331aeee4e1'
});
//search for song track via spotify API
spotify.search({ type: 'track', query: spotifyThisSong }, function(err, data) {
  //console log any errors
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  //console log track information
  console.log('Song Title: ' + data.tracks.items[0].name);
  console.log('Artists: ' + data.tracks.items[0].artists[0].name);
  console.log('Album: ' + data.tracks.items[0].album.name);
  console.log('Song Preview: ' + data.tracks.items[0].preview_url);
});

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
  if (error){
    return console.log('Error occurred: ' + error );
  }
else {
  if (!error && response.statusCode === 200);
    console.log('Title:' + JSON.parse(body).Title);
    console.log('Release Year:' + JSON.parse(body).Year);
    console.log('Actors:' + JSON.parse(body).Actors);
    console.log('Country:' + JSON.parse(body).Country);
    console.log('Language:' + JSON.parse(body).Language);
  }
});



