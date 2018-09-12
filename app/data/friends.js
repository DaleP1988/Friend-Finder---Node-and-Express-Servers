

var app = express();
var port = 3000;


//Routes
//=====================================================================================================
{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
  

//Listener
//=====================================================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
});












You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.


Determine the user's most compatible friend using the following as a guide:



Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


Example: 


User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5





Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
The closest match will be the user with the least amount of difference.



Once you've found the current user's most compatible friend, display the result as a modal pop-up.


The modal should display both the name and picture of the closest match.






// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var parse = require("body-parser");
var path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

 //==================================================================================

//FRIEND FINDER LOGIC

// convert the user resultsinto an array of numbers
//compare difference between current user scores and other user scores
// add the differences to calculate 

totalDifference

//example:
//User 1: [5,1,4,4,5,1,2,5,4,1]
//User 2: [3,2,6,5,1,2,4,1]
//total difference: 2 + 1 + 2 = 5
//use absolute value
//closest match = user with the least amount of difference



//objects with friends
{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
  



 //==================================================================================



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



