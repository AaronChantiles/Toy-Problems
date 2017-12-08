/*
In Pascal's triangle, each number is the sum of the two numbers directly above it.
Recreate Pascal's triangle using JavaScript to take in any number as an argument and output
an array of arrays forming the triangle.

Projected Output for 10:
[ [ 1 ],
  [ 1, 1 ],
  [ 1, 2, 1 ],
  [ 1, 3, 3, 1 ],
  [ 1, 4, 6, 4, 1 ],
  [ 1, 5, 10, 10, 5, 1 ],
  [ 1, 6, 15, 20, 15, 6, 1 ],
  [ 1, 7, 21, 35, 35, 21, 7, 1 ],
  [ 1, 8, 28, 56, 70, 56, 28, 8, 1 ],
  [ 1, 9, 36, 84, 126, 126, 84, 36, 9, 1 ] ]
*/

var pascalsTriangle = function(n) {
  //create arr with length of n
  var arr = [];
  //iterate from 0 to n-1
  for (var i = 0; i < n; i++) {
    //push empty array to the ith row
    arr.push([]);
    //if i is 0 then push 1 to current row
    if (i === 0) { 
      arr[i].push(1);  
    }
    //if i is 1 this push 1 to current row twice
    if (i === 1) { 
      arr[i].push(1);
      arr[i].push(1); 
      
    }
    if (i > 1) {
      //push 1 to current row
      arr[i].push(1);
      //iterate current row length minus 2
      for (var j = 0; j < arr[i - 2].length; j++) {
        //add previous row (jth element) + (jth + 1 element)
        var result = arr[i - 1][j] + arr[i - 1][j + 1];
        //push result to current row array
        arr[i].push(result);
      }
      //push 1 to current row
      arr[i].push(1);
    }
  }
  
  return arr;
};

console.log(pascalsTriangle(10));
