/* Slice(): returns the selected elements in an array, as a new array object, 
element start at the given start , and ends at, but does not include end argument
And it does not modify orginal array */
//Splice(): returns the removed items in an array
/* Slice() Vs Splice():
1. The splice() method returns the removed item(s) in an array and
 slice() method returns the selected element(s) in an array, as a new array object.
 2. The splice() method changes the original array and slice() method doesn’t change the original array.
 3. The splice() method can take n number of arguments:  */

//Slice() Example
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
var citrus1 = fruits.slice(-3); 
console.log(citrus1) // output ["Lemon", "Apple", "Mango"]
console.log(citrus) //output: ["Orange","Lemon"] - because end index is not included
console.log(fruits) //output: ["Banana", "Orange", "Lemon", "Apple", "Mango"] - does not modify
console.log(fruits.slice(2)) //output:  ["Lemon", "Apple", "Mango"] - take total index count as ends parameter

//Splice() Example
var array=[1,2,3,4,5];
console.log(array.splice(2));
// shows [3, 4, 5], returned removed item(s) as a new array object.
console.log(array);
// shows [1, 2], original array altered.
var array2=[6,7,8,9,10];
console.log(array2.splice(2,2));
// shows [8,9]
console.log(array2.splice(2,0));
//shows [] , as no item(s) removed.
console.log(array2);
// shows [6,7,10]
var array3=[11,12,13,14,15];
console.log(array3.splice(2,1,"Hello","World"));
// shows [13]
console.log(array3);
// shows [11, 12, "Hello", "World", 14, 15]
//*Note: when there is negativ(-) index, start from the end and index will be -1,-2,-3...
var array4=[16,17,18,19,20];
//here -1=20, -2=19 and so on
console.log(array4.splice(-2,1,"me"));
// shows  [19]
console.log(array4);
// shows [16, 17, 18, "me", 20]



// More Splice example

// splice is used to update some data in array and change it to specified . Example yesma ravi dai ko name sanjay dai ko ma change gareko

function UpdateItems(arr, index, changeName) {

	arr.splice(index, 1, changeName);
	return arr;
  
  }
  
  let newArray = ["a", "b", "c"];
  
  UpdateItems(newArray, 2, "d");
  
  console.log(newArray);