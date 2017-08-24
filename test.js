var spotify = require('node-spotify-api')
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

var spotify = new spotify ( {
  id: 'ba8e76d10d424a80bba36fee7c6cbdad',
  secret: 'af354c971b66413e8ee827331aeee4e1'
});

//node liri.js do-what-it-says use the fs node package to take
//the contents of random.txt and use it to call one of liri's
//commands to run spotify-this-song "I want it that Way"

spotify.search({ type: 'track', query: spotifyThisSong }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  console.log(data.tracks.items[0].name);
  console.log(data.tracks.items[0].artists[0].name);
  console.log(data.tracks.items[0].album.name);
  console.log(data.tracks.items[0].preview_url);

});
