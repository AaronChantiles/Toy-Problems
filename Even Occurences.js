/*
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.
*/

/*
example usage:
var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
	//key : ocurrence object
	var obj = {};
	//iterate over elements in input array
	arr.forEach(element => {
		//if element not a obj key
		//set as obj key equal to 1; else current value plus 1
		obj[element] === undefined ? obj[element] = 1 : obj[element] = obj[element] + 1;
	});
	
	//iterate through elements of input arr
	for (var i = 0; i < arr.length; i++) {
		//if element occurs an even amount of times
		if (obj[arr[i]] % 2 === 0) { 
			return arr[i]; 
    }
	}
	return null;
};


evenOccurrence([6, 'meow', 1, 7, 2, 'meow', 4, 5, 6, 'food', 9, 6, 4]);
