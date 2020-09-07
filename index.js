/******************************TABLE OF CONTENTS **********************************
1. Which Function Returns the Larger Number?
2. Return the First and Last Elements in an Array
3. Add up the Numbers from a Single Number
4. Count Syllables
5. Checking Even Numbers
6. Find the Smallest and Biggest Numbers
7. Bitwise Operations
8. Multiply by Length
9. Cube the Square Root
10. Get Word Count
11. Which Generation Are You?
12. Maximum Difference

****************************** TABLE OF CONTENTS **********************************/




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

// 7. Bitwise Operations
/* Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers. */

function bitwiseAND(n1, n2) {
	return (n1 & n2);
}

function bitwiseOR(n1, n2) {
	return (n1 | n2);
}

function bitwiseXOR(n1, n2) {
	return (n1 ^ n2);
}

// 8. Multiply by Length
/* Create a function to multiply all of the values in an array by the amount of values in the given array. */

function multiplyByLength(arr) {
	let result = [];
	for (let i=0; i < arr.length; i++) {
		let newNumber = arr[i] * arr.length;
		result.push(newNumber);
	}
	return result;
}

// 9. Cube the Square Root
/* Create a function that takes a number as an argument and returns the square root of that number cubed. (All numbers will evenly square root, so don't worry about decimal numbers.) */

function cubeSquareRoot(num) {
	let squareRoot = Math.sqrt(num);
	let cubedNumber = Math.pow(squareRoot, 3);
	return cubedNumber;
}

// 10. Get Word Count
/* Create a function that takes a string and returns the word count. The string will be a sentence. */

function countWords(str) {
	let splitSentence = str.split(" ");
	return splitSentence.length;
}

// 11. Which Generation Are You?
/* Try finding your ancestors and offspring with code.

Create a function that takes a number and "m" (for male) or "f" (for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    If the number is negative, return the related ancestor.
    If positive, return the related descendant.
	You are generation 0. In the case of 0 (male or female), return "me!".
	
Generation				Male					Female
-3					great grandfather		great grandmother
-2					grandfather				grandmother
-1					father					mother
0					me!						me!
1					son						daughter
2					grandson				granddaughter
3					great grandson			great granddaughter */

function generation(x, y) {
	switch(x) {
		case -3:
			switch(y) {
				case "f":
					return "great grandmother";
					break;
				case "m":
					return "great grandfather";
					break;
			}
		case -2:
			switch(y) {
				case "f":
					return "grandmother";
					break;
				case "m":
					return "grandfather";
					break;
			}
			case -1:
			switch(y) {
				case "f":
					return "mother";
					break;
				case "m":
					return "father";
					break;
			}
			case 0:
			switch(y) {
				case "f":
					return "me!";
					break;
				case "m":
					return "me!";
					break;
			}
			case 1:
			switch(y) {
				case "f":
					return "daughter";
					break;
				case "m":
					return "son";
					break;
			}
			case 2:
			switch(y) {
				case "f":
					return "granddaughter";
					break;
				case "m":
					return "grandson";
					break;
			}
			case 3:
			switch(y) {
				case "f":
					return "great granddaughter";
					break;
				case "m":
					return "great grandson";
					break;
			}
	}
}

// 12. Maximum Difference
/* Given an array of integers, return the difference between the largest and smallest integers in the array. */

function difference(nums) {
	return (Math.max(...nums) - Math.min(...nums));
}

