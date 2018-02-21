
// Setting .env

require("dotenv").config();

///Importing dependencies and NPM packages 

const Spotify = require("node-spotify-api");
const Twitter = require("twitter");
const keys = require("./keys");
const fs = require("fs");
const request = require("request");


const spotify = new Spotify(keys.spotify);

//creating search for tweets 

const generateTweets = function() {
	const client = new Twitter(keys.twitter);

	const info = {
		handle: "wigqueen_"
	};

	client.get("statuses/user_timeline", info function(error, tweets, response) {
		if (!error) {
			for (let i = 0; i <tweets.length; i++) {
				console.log(tweets[i].created_at);
				console.log("Here's a rundown of your latest tweets:");
				console.log(tweets[i].text);
			}
		}

	});
};

// prints to log.txt
const generateArtist = function(artist) {
	return.artist.name;
};

// Spotify song search 

const generateSongs = function(song) {
	if (song === undefined) {
		song = "Sorry, I don't recall that slowjam";
	}

	spotify.search(
	{
		type: "track", 
		query: song
	},
	function(err, data) {
		if (err) {
			console.log("We are having some trouble right now" + err);
			return;
			}
			const songs = data.tracks.items;

			for(let i = 0; i < songs.length; i++) {
				console.log(i);
				console.log("artist(s)" : + songs[i].artists.map(generateArtist));
				console.log("title: " + songs[i].title);
				console.log("preview song: " + songs[i].preview_url);
				console.log("album: " + songs[i].album.name);
				console.log("------------------------------------");

			}

		}
	);
};


// Ombd Movie Search 

const generateMovie = function(movieTitle) {
	if (movieTitle === undefined) {
		movieTitle = "May want to grab some popcorn while we search for that...";
}

const movieLink = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=full&tomatoes=true&apikey=trilogy";

	request(movieLink, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			const jsonData = JSON.parse(body);

			console.log("Title: " + jsonData.Title);
      		console.log("Year: " + jsonData.Year);
      		console.log("Rated: " + jsonData.Rated);
      		console.log("IMDB Rating: " + jsonData.imdbRating);
      		console.log("Country: " + jsonData.Country);
      		console.log("Language: " + jsonData.Language);
      		console.log("Plot: " + jsonData.Plot);
      		console.log("Actors: " + jsonData.Actors);
      		console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
		}

	});
};

// request("https://twitter.com/WigQueen_?t=", function(error, response, body){

// iff(!error && response.statusCode === 200) {

// 	console.log("Your last 20 Tweets were:" + JSON.parse(body).)
// }
// })





// * `my-tweets`

//     * `spotify-this-song`

//     * `movie-this`

//     * `do-what-it-says

