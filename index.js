/******************************TABLE OF CONTENTS **********************************
1. Which Function Returns the Larger Number?
2. Return the First and Last Elements in an Array
3. Add up the Numbers from a Single Number
4. Count Syllables
5. Checking Even Numbers
6. Find the Smallest and Biggest Numbers

******************************TABLE OF CONTENTS **********************************/




// 1. Which Function Returns the Larger Number?
/* Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

    If f returns the larger number, return the string f.
    If g returns the larger number, return the string g.
    If the functions return the same number, return the string neither. */

function whichIsLarger(f, g) {
    if ( f() > g() ) {
        return "f";
    } else if ( g() > f() ) {
        return "g";
    } else {
        return "neither";
    }	
}

// 2. Return the First and Last Elements in an Array
/* Create a function that takes an array of numbers and return the first and last elements as a new array. */

function firstLast(arr) {
	let firstElement = arr[0];
	let arrayLength = arr.length;
	let lastElement = arr[arrayLength-1];
	let result = [ firstElement, lastElement ];
	return result;
}

// 3. Add up the Numbers from a Single Number
/* Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. */

function addUp(num) {
	let result = 0;
	for ( let i = 1; i <= num; i++ ) {
		result += i;
	}
	return result;
}

// 4. Count Syllables
/* Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -. */

function numberSyllables(word) {
	let myArray = word.split("-");
	let result = myArray.length;
	return result;
}

// 5. Checking Even Numbers
/* Create a function that takes in an array and returns true if all its values are even, and false otherwise. */

function checkAllEven(arr) {
    return arr.every((x) => x % 2 === 0);
}

// 6. Find the Smallest and Biggest Numbers
/* Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order. */

function minMax(arr) {
	let arrMin = Math.min(...arr);
	let arrMax = Math.max(...arr);
	let result = [ arrMin, arrMax ];
	return result;
}
