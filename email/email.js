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

oauth2Client.setCredentials(credintials.tokens);

google.options({ auth: oauth2Client });

gmail.users.messages.list({userId:"osamah.net.m@gmail.com"},function(err,data){
	console.log(profile,data);
})
