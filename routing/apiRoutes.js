// a POST routes  /api/friends 
//load data

var friendsData = require("../data/friend.js");


module.exports = function(app) {
  // GET route displays friends JSON

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {

    var friendScores = req.body.scores;  //body needs a reference
    var scoreArray = [];
    var friendSurveySum = 0;
    var bestMatch = 0;

    // loop through friends in list
    for (var i=0; i<friendsData.length; i++) {
        var scoresDifference = 0;
        //check and compare scores
        for(var j = 0; j<friendScores.length; j++)
            scoresDifference += (Math.abs(parseInt(friendData[i].scores[j])- parseInt(friendScores[j])));
    }
        // reults into scoreArray
  });

  scoreArray.push(scoresDifference);
}

//find match
for(var i=0; i<scoreArray.length; i++){
    if(scoreArray[i] <= scoreArray[bestMatch]){
        bestMatch = i;
    }
}

// return bestMatch 
var besties = friendsData[bestMatch];
res.json(bestie);

// new entry into friendsData array
friendsData.push(req.body);

   

