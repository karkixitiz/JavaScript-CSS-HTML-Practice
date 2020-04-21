// # Update object property
	let userActivity = {
		id: 23894201352,
		date: 'January 1, 2017',
		data: {
		totalUsers: 51,
		online: 42
		}
	}
	userActivity.data.online = 45;
	console.log(userActivity)

  // # Access Property Names with Bracket Notation
	let foods = {
		apples: 25,
		oranges: 32,
		plums: 28,
		bananas: 13,
		grapes: 35,
		strawberries: 27
	};
	function checkInventory(foods,scannedItem) {
		// change code below this line
		return foods[scannedItem];
	}
		console.log(checkInventory(foods,"apples")); //25
		console.log(checkInventory(foods,"bananas")); //13
		console.log(checkInventory(foods,"strawberries")); //27
		console.log(checkInventory(foods,"strawber")); //undefined

	// Check if an Object has a Property
	let users = {
		Alan: {
		  age: 27,
		  online: true
		},
		Jeff: {
		  age: 32,
		  online: true
		},
		Sarah: {
		  age: 48,
		  online: true
		},
		Ryan: {
		  age: 19,
		  online: true
		}
	  };
	  function isEveryoneHere(obj) {
		return  obj.hasOwnProperty('Alan' && 'Jeff' && 'Sarah' && 'Ryan');
	  }
	  console.log(isEveryoneHere(users));

	// # Iterate Through the Keys of an Object with a for...in Statement
		let users1 = {
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
		for (let u in users1) {
				console.log(u) // Alan Jeff Sarah Ryan
		}
		console.log(Object.values(users1));//[{..},{..},{..},{..}]
			console.log(users1.Alan.age);  //27
	
	// # Modify Object property and an Array Stored in an Object
	let user1 = {
		name: 'Kenneth',
		age: 28,
		data: {
		  username: 'kennethCodesAllDay',
		  joinDate: 'March 26, 2016',
		  organization: 'freeCodeCamp',
		  friends: [
			'Sam',
			'Kira',
			'Tomo'
		  ],
		  location: {
			city: 'San Francisco',
			state: 'CA',
			country: 'USA'
		  }
		}
	  };

	  function addFriend(userObject,friend){
		  var friendList=userObject.data.friends
		  friendList.push(friend)
		  return friendList
	  }

	  function changeCity(userObject,city){
	   userObject.data.location.city=city
	   return userObject
	}
	  console.log(addFriend(user1,'kale'))//Array(4)
	  console.log(user1)// object with friends array with new friend
	  console.log(changeCity(user1,'Kansan')) // object with updated location