/*
`filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
returns an array, in any order, of the full names of family members who pass the passed in truth test. 
You will need to use recursion in your solution in order to handle nested familty trees.
*/

var filterFamilyMembers = function (familyTree, truthTest) {
	//create array to store family names
  var familyName = [];
  //if family member passes truthTest
  if (truthTest(familyTree)) {
  	//push first & last name to familyName Array
  	familyName.push(familyTree.firstName +' '+ familyTree.lastName);
  }
  var childArr = familyTree.children;
  //iterate through children array elements (child objects)
  for (var i = 0; i < childArr.length; i++) {
  	//recurse through all children and save family name array data
  	familyName = familyName.concat(filterFamilyMembers(childArr[i], truthTest));
  }
	//return array
  return familyName;
};


var livesInBerkeley = function (familyMember) {
  return familyMember.location === 'Berkeley';
};


var familyTree = {
   'firstName': 'Beth',
   'lastName': 'Johnson',
   'location': 'San Francisco',
   'children': [
     {
       'firstName': 'Beth Jr.',
       'lastName': 'Johnson',
       'location': 'Berkeley',
       'children': [
         {
           'firstName': 'Smitty',
           'lastName': 'Won',
           'location': 'Beijing',
           'children': []
         }
       ]
     },
     {
       'firstName': 'Joshie',
       'lastName': 'Wyattson',
       'location': 'Berkeley',
       'children': []
     }
   ]
 };

console.log(filterFamilyMembers(familyTree, livesInBerkeley));