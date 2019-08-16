require("dotenv").config();

// import from keys.js
var keys = require("./keys.js");
//accessing keys information
var spotify = new spotify(keys.spotify);

// Function that will take some of the commands:
function userInput(option, inputArgument) {
    switch (option) {
        case 'concert-this':
            displayConsetInfo(inputArgument);
            break;
        case 'spotify-this-song':
            displaySongInfo(inputArgument);
            break;
        case 'movie-this':
            displayMovieInfo(inputArgument);
            break;
        case 'do-what-it-says':
            displaySomeInfo();
            break;
        default:
            console.log("invalid option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")

    }
}