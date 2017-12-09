/*
 Write a function that generates every sequence of throws a single
 player could throw over a three-round game of rock-paper-scissors.

 Your output should look something like:
   [["rock", "rock", "rock"],
    ["rock", "rock", "paper"],
    ["rock", "rock", "scissors"],
    ["rock", "paper", "rock"],
             ...etc...
     ]

Extra credit:
  - Make your function return answers for any number of rounds.
Example:
rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*/

var rockPaperScissors = function (numOfRounds) {
  //outcomes array []
  var outcomes = [];
  //moves array [r, p, s]
  var moves = ['rock', 'paper', 'scissors'];

  //inner function (roundsLeft and result)
  var combinations = function(roundsLeft, result) {

  	if (roundsLeft === 0) {
  	//if Rounds left is 0 push result to outcomes
  	outcomes.push(result);
  	return;
  	}
  		
  	//iterate through moves array
  	moves.forEach(move => {	
  		//Recursion (roundsLeft - 1 and concat result with move)
  		combinations(roundsLeft-1, result.concat(move));
  	});
  }

  //invoke inner function (numOfRounds & empty array)
  combinations(numOfRounds, []);

  return outcomes;
};

console.log(rockPaperScissors(3));