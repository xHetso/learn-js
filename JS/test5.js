//Классы и области видимости
/*
function getName(){}

class Car {
	getName(){

	}
	getPrice = () =>{

	}

}
*/

function getName() {}

class Car {
	#name = ''

	constructor(name) {
		this.#name = name
	}

	getName() {
		return this.#name
	}
}

class Ship extends Car {
	constructor(name) {
		super(name)
	}

	getPrice() {
		return 10000
	}
}

const car = new Car('BMW')
const ship = new Ship('Rocket')

console.log(Object.getOwnPropertyDescriptors(Ship.prototype))

//console.log(Object.getOwnPropertyDescriptors(Ship))

//console.log(ship.getName())

//console.log(ship.getPrice())

//console.log(car.getName())

//const car = new Car()
