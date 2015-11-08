var readline = require('readline');

var google = require('googleapis');
var OAuth2Client = google.auth.OAuth2;
var gmail = google.gmail('v1');
var credintials = require('./credintials');


// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = credintials.client_id;
var CLIENT_SECRET = credintials.client_secret;
var REDIRECT_URL = 'http://www.itechdom.com';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

var rl = readline.createInterface({
	input: process.stdin,
    	output: process.stdout
});

function getAccessToken(oauth2Client, callback) {
	// generate consent page url
	var url = oauth2Client.generateAuthUrl({
		access_type: 'offline', // will return a refresh token
	    scope: 'https://www.googleapis.com/auth/gmail.readonly' // can be a space-delimited string or an array of scopes
	});

	console.log('Visit the url: ', url);
	rl.question('Enter the code here:', function(code) {
		// request access token
		oauth2Client.getToken(code, function(err, tokens) {
			// set tokens to the client
			// TODO: tokens should be set by OAuth2 client.
			oauth2Client.setCredentials(tokens);
			console.log(tokens);
			callback();
		});
	});
}
//
//                                                             // retrieve an access token
getAccessToken(oauth2Client, function() {

});
