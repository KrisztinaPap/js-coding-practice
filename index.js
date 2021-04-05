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
13. Reverse String
14. Palindrome Checker
15. Reverse integer
16. Capitalize First Letter Of Each Word
17. Max character
18. FizzBuzz
19. Get total of numbers
20. Add all primes
21. Seek and destroy
22. Even and odd sums
23. Old enough to drink

****************************** TABLE OF CONTENTS **********************************/




// 1. Which Function Returns the Larger Number?
/* Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

    If f returns the larger number, return the string f.
    If g returns the larger number, return the string g.
    If the functions return the same number, return the string neither. */

function whichIsLarger(f, g) {
    if ( f > g ) {
        return f;
    } else if ( g > f ) {
        return g;
        
    } else {
        return "neither";
    }	
}

const whichIsLarger2 = (a,b) => {
	return (a > b) ? a
		: (b > a) ? b
			: 'neither';
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

function helperFunction(digit) {
	let total = 0;
	for(let i = 1; i <= digit; i++) {
		total = total + i;
	}
	return total;
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

const cubeSquareRoot2 = num => {
	return Math.pow(Math.sqrt(num),3);
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

// 13. Reverse string
/* Given a string, return the reverse in a string format.
* Example: 'hello' => 'olleh'
*/

function reverseString(str) {
	return str
		.split('')
		.reverse()
		.join('');
}

function reverseString2(str) {
	let reverseString = '';
	for(let letter of str) {
		reverseString = letter + reverseString;
	}
	return reverseString;
}

function reverseString3(str) {
	let newString = '';
	str.split('').forEach(element => newString = element + newString);
	return newString;
}

function reverseStringWithReduce(str) {
	return str.split('').reduce((reverseArray, arrayElement) => arrayElement + reverseArray, '');
}

// 14. Palindrome checker
/* Is the string provided a palindrome?
* Do not care about case or symbols/special chars/numbers, spaces
* Return true or false
* Example: 'Radar' => true; 'hello' => false; 'Ra dAr!!!' => true
*/

function palindromeChecker(str) {
	let str1 = str.toLowerCase().replace(/[^a-z]/g,'');
	let str2 = str1.split('').reverse().join('');

	return (str1 === str2);
}

// 15. Reverse an integer
/*
* Return an integer reversed
* Example: 12345 => 54321
*/

function reverseInteger(num) {
	let result = num
		.toString()
		.replace(/[^0-9]/g, '') // Useless line? Since the function only takes in integers...
		.split('')
		.reverse()
		.join('');
	return Number(result) * Math.sign(num); // Math.sign makes sure that if the number was negative, the result will be negative as well
}

// 16. Capitalize letters
/*
* Function takes in a string (sentences) and returns them all lowercase but the first letter fo each * word.
* Example: "WELCOME home mY friend!" => "Welcome Home My Friend!"
*/

function capitalize(text) {
	return text
		.toLowerCase()
		.replace(/\b[a-z]/g, firstLetter => firstLetter.toUpperCase());
}

function capitalize2(text2) {
	return text2
		.toLowerCase()
		.split(' ')
		.map(word => word[0].toUpperCase() + word.substr(1))
		.join(' ');
}

// 17. Max character
/*
* Return the character that is most common in a string.
* Example: 'javascript' => 'a'
*/

function maxCharacter(text) {
	let charMap = {};
	let maxNum = 0;
	let maxChar = '';

	text.toLowerCase().replace(/[^a-z0-9]/g, '').split('').forEach(function(char) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});
	// return charMap;  (Returns the entire charMap!)
	
	for(let char in charMap) {
		if(charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

// 18. FizzBuzz
/*
* Print the numbers from 1-100. 
* Numbers divisible by 3 should be replaced with 'fizz'
* Numbers divisible by 5 should be replaced with 'buzz'
* Numbers divisible by both 3 and 5 should be replaced with 'fizzbuzz'
*/

function fizzBuzz() {
	for(let i = 1; i < 101; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}

// 19. Add up numbers
/*
* Function takes in numbers separated by commas. Regardless the number of numbers, add them all up, return the total as an integer
* Example: 1,2,3 => 6; 1,1,1,1,1,1,1 => 7
*/

function getTotal(...nums) {
	return nums.reduce((total, num) => total + Number(num));
}

const es6GetTotal = (...nums) => { return nums.reduce((total, number) => total + Number(number))};

// 20. Add all primes
/*
* Function add up all prime nmumbers up to the number provided.
* Example: 10 => 17
* (It only adds up the prime numbers)
*/

function addAllPrimes(num) {

	let total = 0;
		
	const isPrime = (i) => {
		for(let ii = 2; ii < i; ii++) {
			if(i % ii === 0) {
				return false;
			}
		}
		return true;
	}

	// loop from 2 (prime numbers are larger than 1) to num and check if it is a prime number
	for (let i = 2; i <= num; i++) {
		if(isPrime(i)) {
			total+=i;
		}
	}
	return total;
}

// 21. Seek and destroy
/*
* Two parameters are supplied: an array + values to be removed from the array
* Example: [2,3,4,6,6, 'hey'], 2, 6 => [3,4,'hey'] 
*/

const seekAndDestroy = (arr, ...rest) => {
	return arr.filter(val => !rest.includes(val));
}

// 22. Even and odd sums
/*
* Takes in an array and returns the sums of the even and odd numbers
* Example: [1,2,3,4,5,6] = 9, 12
*/
function evenOddSums(...arr) {
	let evenTotal = 0;
	let oddTotal = 0;

	arr.map(num => (num % 2 === 0) ? evenTotal += num : oddTotal += num);

	console.log(`Even total: ${evenTotal}, Odd total: ${oddTotal}`);
	return [evenTotal, oddTotal];
}

/*
* 23. Old enough to drink 
* Function takes in an array of ages. It returns an array of the ages that are old enough to drink (21)
* Example: [5,12,18,21,23,44,56,76,100] => [21,23,44,56,76,100]
*/

const twentyOne = (...arr) => arr.filter(age => (age>=21) ? true : false);



///////////////////////////////////////////////////////


// Running current function for testing purposes
const output = twentyOne(5,12,18,21,23,44,56,76,100);


console.log(output);
