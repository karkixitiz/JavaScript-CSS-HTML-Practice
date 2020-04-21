/*  indexOf()=> Syntax: array.indexOf(item, start) - return the position of the first occurrence 
of a specified value in a stringand returns -1 if the value to search for never occurs.
 It also count spaces */ 

 // Example in string
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
console.log(paragraph.indexOf('dog')) //40
console.log(paragraph.indexOf('kiran')) //-1

//Example in Array
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
console.log(fruits.indexOf("Apple", 5)) //1

let arr=[1,5,6,10,11,12,14]
console.log(arr.indexOf(11,2))