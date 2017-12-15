//Given a string find the length of the longest substring without repeating characters

var lengthOfLongestSubstring = function(s) {
  var substrArr = [];
  var letterArr = [];
  var charArr = s.split('');
  
  //for each char in the array
  for (var char of charArr) {
    //if the letter array doesn't include the char
    if (!letterArr.includes(char)) {
      letterArr.push(char);
    } else {
      //push the length of the letter array to the substring array
      substrArr.push(letterArr.length);
      letterArr = [];
      letterArr.push(char);
    }
  }
  substrArr.push(letterArr.length);
  
  //return the largest number in the substring array
  return Math.max(...substrArr);
};

console.log(lengthOfLongestSubstring('abcdeabebabcdefg'));