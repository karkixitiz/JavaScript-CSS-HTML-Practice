function sum(x, y, z) {
	return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  

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
  
  
  
  function spreadOut() {
	let fragment = ['to', 'code'];
	let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
	return sentence;
  }
  
  // do not change code below this line
  console.log(spreadOut());