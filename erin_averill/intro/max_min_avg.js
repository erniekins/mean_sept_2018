// Max, min, and average
// Objectives:

// Iterate over an array
// Construct a string
// Use the return statement
// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function max_min_avg(arr){
	var max = arr[0];
	var min = arr[0];
	var total = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i]
		}
		if(min > arr[i]){
			min = arr[i]
		}
		else(total = total + arr[i])
	}
	var avg = total/arr.length;
	return('The maximum is ' + max + ', the minimum is ' + min + ', and the average is ' + avg);
}
arr = [1,2,3,4];
max_min_avg(arr);