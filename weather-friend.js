

function UserSearch(name, location){

	this.name = name;
	this.location = location; 
	this.date = Date.now();

	this.weather = function(){
		var weather = require('weather-js');
 
 
weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
  console.log(result[0].location.name);
});
	}
}  

var newUser = new UserSearch(process.argv[2], process.argv.splice(3).join(" "));

newUser.weather();