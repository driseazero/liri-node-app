var request = require('request');
var keys = require('./keys.js');

var Twitter = require('twitter');
var userchoice = process.argv[2];

switch(userchoice){

  case "twitter": twitterInfo();
  break; 

  case "movie": movieInfo();
  break;
}

 function twitterInfo(){
var client = new Twitter(keys);
 
var params = {screen_name: 'Peloid Void'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for(var i = 0; i < tweets.length;i++){
      console.log(tweets[i].text);
    }
    
  }
});

}


function movieInfo(){


var movie="mr nobody";
if(process.argv[3]){
  movie = process.argv.splice(3).join(" ");
}
  

  var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
   request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
               
            


    console.log(movie);  
    console.log(response); 
       }
       else if(error) {
                    console.log(error);
                }
           // Getting the first row of the table
     
    });

}