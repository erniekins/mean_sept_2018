// Given a string, write a function that will determine whether the braces  
// - including parentheses (), square brackets [], and curly brackets {} 
// - within the string are valid. That means that any braces within other braces must close before the outer set closes.

// HINT: Keep in mind that you may use arrays and objects to keep your information
// rganized!

// Example: bracesValid("{{()}}[]") returns true because the inner braces 
// close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces 
// close before the parentheses, which starts within the curly braces, had a chance to close.

// when you find ( [ or { need to find matching ) ] } before finding new 
// braces

function valid_or_no(something){
	var brace = [];
	for(var i = 0; i < something.length; i++){
		if(i == '(' || i == '{' || i == '['){
			brace.push(something[i]);
		}
		if( i == ')' || i == '}' || i == ']'){
			brace.pop();
		}
	}
	if(brace.length != 0){
		return('False');
	}
	if(brace.length == 0){
		return('True');
	}
}

valid_or_no('{{}}([)')