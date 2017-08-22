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