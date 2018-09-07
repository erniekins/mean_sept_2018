// Challenge 1
// Write a function that accepts an array of student objects, as shown below. 
// Print all of the students' names and their cohorts.

// Challenge 2
// Write a function that accepts an object of users divided into employees 
// and managers, as shown below, and logs the information to the console.
var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function print_them(students){
	for(var i = 0; i < students.length; i++){
		console.log(students[i])
	}
};

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function list_all(people){
	console.log('Employees');
	for(var i = 0; i < users['employees'].length; i++){
		var sum = users['employees'][i].last_name.length + users['employees'][i].first_name.length;
		console.log(i+1 + ' - ' + users['employees'][i].last_name + ', ' + users['employees'][i].first_name + ' - ' + sum);
	};
	console.log('Managers');
	for(var j = 0; j < users['managers'].length; j++){
		var sum = users['managers'][j].last_name.length + users['managers'][j].first_name.length;		
		console.log(j+1 + ' - ' + users['managers'][j].last_name + ', ' + users['managers'][j].first_name + ' - ' + sum);
	};
};
