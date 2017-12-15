/*
Find the median of two sorted arrays given two arrays as an input

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0 
*/


var findMedianSortedArrays = function(nums1, nums2) {
  var newArr = nums1.concat(...nums2);
  newArr.sort((a, b) => a - b);
    
  var len = newArr.length;
  if (len % 2 === 0) {
    var median1 = newArr[parseInt(len/2) - 1];
    var median2 = newArr[parseInt(len/2)];
      
    return (median1 + median2) / 2;
  } else {
    return newArr[parseInt(len/2)];
  }
};

console.log(findMedianSortedArrays([1, 2, 3, 4], [3, 4, 5, 6, 7, 8]));
