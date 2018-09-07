// sort through a given string of numbers that would sort the number from 
// lowest to highest

//1324 when you get to i=1 and i=2 need to make i1 = i2
function bubbleSort(num){
	for(var j = 0; j < num.length; i++){
		for(var i = 0; i < num.length; i++){
			if(num[i] > temp){
				var temp = num[i + 1];
				num[i + 1] = num[i];
				num[i] = temp;
			}
		return num;
		}
	}
}

//number3
class Car{
	constructor(speed){
		this.damage_done = 10;
		this.max_speed = speed;
	}
	function bump(car){
		if( car != this){
			this.damage_done += this.max_speed * .6
			car.damage_done += this.max_speed * .4  
		}
	}
}
greenCar = new Car(100);
MiniCar = new newCar(70);

greenCar.bump(MiniCar);

//number4
function Foo(){
	const privateMethod = function(){
		console.log('private:', this);
	}
	this.greet = function(){
		console.log('greet:', this);
		privateMethod();
	}
}
const some_obj = new Foo();
some_obj.greet();

// some_obj