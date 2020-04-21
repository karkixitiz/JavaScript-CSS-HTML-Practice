// List of US states and their capitals
// Note: Javascript objects are written as "key:value" pairs

const states = {
	AZ: "Phoenix",
	"NY": 'Albany',
	'VA': "Richmond",
	"Wisconsin": "Madison"
  }
  //single('),double("") or without in key does not matter

  //Object.keys(): return all the keys of an object
  console.log(Object.keys(states)) //["AZ", "NY", "VA", "Wisconsin"]

  //Object.values(): return all the values of an object
  console.log(Object.values(states)) // ["Phoenix", "Albany", "Richmond", "Madison"]

  /* Object.entries(): does not select key:value but rather translates both
  and return an array of arrays. One array which wraps the entire translated object,
  and each key-value pair from the object is positioned in its own seperate sub-array */
  console.log(Object.entries(states))
  //output: [ [ 'AZ', 'Phoenix' ],[ 'NY', 'Albany' ],[ 'VA', 'Richmond' ],[ 'Wisconsin', 'Madison' ]]


  // Other Examples
		let users = {
			Alan: {
			age: 27,
			online: false
			},
			Jeff: {
			age: 32,
			online: true
			},
			Sarah: {
			age: 48,
			online: false
			},
			Ryan: {
			age: 19,
			online: true
			}
		};
		
		function getArrayOfUsers(obj) {
			console.log(Object.keys(obj));
			console.log(Object.values(obj));
		}
		
		console.log(getArrayOfUsers(users));
