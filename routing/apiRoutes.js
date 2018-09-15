// LOAD DATA

var friendsData = require("../app/data/friends");

//ROUTING
module.exports = function (app) {

//API GET REQUESTS

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

//API POST REQUESTS

    app.post("/api/friends", function (req, res) {

        var friendScores = req.body.scores;  //body needs a reference
        var scoreArray = [];
        var friendSurveySum = 0;
        var bestMatch = 0;

        // loop through friends in list
        for (var i = 0; i < friendsData.length; i++) {
            var scoresDifference = 0;
            //check and compare scores
            for (var j = 0; j < friendScores.length; j++)
                scoresDifference += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(friendScores[j])));
        }

        scoreArray.push(scoresDifference);
        // reults into scoreArray
        //find match
        for (var i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] <= scoreArray[bestMatch]) {
                bestMatch = i;
            }
        }

        // return bestMatch 
        var besties = friendsData[bestMatch];
        res.json(besties);
        console.log(besties);

        // new entry into friendsData array
        friendsData.push(req.body);

    });
}




