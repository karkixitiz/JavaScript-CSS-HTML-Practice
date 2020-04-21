//There are different usages of the spread operator and each usage target to solve a different problem statement
// # Expanding Array
	let greet=['Hello','world']
	console.log(greet)
	console.log(...greet)
	/* 	output
		['Hello', 'World']
		Hello World */
	// sometime we may need to convert a string into a list of characters.
	let greetings="hello"
	let chars=[...greetings]
	console.log(chars)
	//output: [ 'h', 'e', 'l', 'l', 'o' ]

// Combining Arrays
	let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
	let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
	let subscribers = [...blog1Subscribers, ...blog2Subscribers];
	console.log(subscribers);
	//Output:	["billy@example.com", "sally@gmail.com", "timmy@gmail.com", "tammy@example.com", "tommy@gmail.com"]
	//Array.push
	/* let arr1 = ['John', 'Sofia', 'Bob'];
	let arr2 = ['Julia', 'Sean', 'Anthony'];
	arr2.push(...arr1);
	console.log(arr2); */
//Copying Arraya and Objects
	let arr1 = ['John', 'Sofia', 'Bob'];
	let arr2 = [...arr1, 'Anthony', 'Sean'];
	console.log(arr2);
	//output: ['John', 'Sofia', 'Bob', 'Anthony', 'Sean']
	let o1 = { a: 1, b: 2 };
	let o2 = { c: 3, d: 4, ...o1 };
	console.log(o2);
	//output: { c: 3, d: 4, a: 1, b: 2 }
//Calling array function
	function sum(x, y, z) {
	return x+y+z;
	  }
	  let totalMarks=[1, 2, 3]
	  console.log(sum(...totalMarks))
	 // output: 6
//Spread Operator Vs Rest Parameter : (...)	 
		/* Rest parameter: collects all remaining elements into an array.
		Spread operator: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements*/
		// Example Spread Operator
		function add(...args) {
			let result = 0;
		  
			for (let arg of args) result += arg;
		  
			return result
		  }
		  
		  console.log(add(1)) // returns 1
		  console.log.add((1,2)) // returns 3
		  console.log.add((1, 2, 3, 4, 5)) // returns 15 
		// Example Rest Parameter
		  function multiply(multiplier, ...theArgs){
			  return theArgs.map(function(element){
				  return multiplier *element
			  })
		  }
		  var arr=multiply(2,1,2,3)
			console.log(arr)
		  //output: [2,4,6]


		function copyMachine(arr, num) {
			let newArr = [];
			while (num >= 1) {
			  newArr.push([...arr]);
			  // change code above this line
			  num--;
			}
			return newArr;
		  }
		
		  // change code here to test different cases:
		  console.log(copyMachine([true, false, true], 2));
  