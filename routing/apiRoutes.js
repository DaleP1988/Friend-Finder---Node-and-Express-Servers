// LOAD DATA

var friendsData = require("../app/data/friends");

//ROUTING
module.exports = function (app) {

//API GET REQUESTS

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        console.log(friendsData);
    });


//req.body is a part of the body-parser middleware. //req is the rest request. res is the response
    app.post("/api/friends", function (req, res) {

        var friendScores = req.body.scores;  //body needs a reference
        var scoreArray = [];
        var friendSurveySum = 0;
        var bestMatch = 0;

        // loop through friends in list
        // for the friendsData check the scores
 
        for (var i = 0; i < friendsData.length; i++) {
            if(friendsData[i].name === req.body.name){
                continue;
            }
            var scoresDifference = 0;
            
            //check and compare scores
            //take absolute value of the difference between scores
            for (var j = 0; j < friendScores.length; j++){
                scoresDifference += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(friendScores[j])));
            }
            scoreArray.push(scoresDifference); //putting the result in the array after each calculation, for each friend in list
        }

        //loop through the scoreArray to find the score that has the lowest score difference
        //this logic isn't working
        for (var i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] <= scoreArray[bestMatch]) {
                bestMatch = i;
            }
        }

        // return bestMatch 
        var bestie = friendsData[bestMatch];
        console.log(bestie);
        friendsData.push(req.body);
        res.json(bestie);     //returns a single bestie
        

        // new entry into friendsData array
      

    });
}



//GET POST PUT DELETE = main verbs 
// var bestDifference = 999;

// for (var i = 0; i <friendsData.length; i ++){
//     var scoresDifference = 0;


//     for (var j = 0; j < friendScores.length; j++){
//         scoresDifference += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(friendScores[j])));
//     }
//     if (scoresDifference <= bestDifference){
//         bestDifference = scoresDifference;        //this finds the better match each time it goes through the loop.
//         bestMatch = i;                            //current bestMatch

//     }         
// });

