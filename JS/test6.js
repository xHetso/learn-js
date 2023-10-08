//ООП, Наследование #-делает переменную приватно
class Animal {
	#name

	constructor(name) {
		this.#name = name
	}

	move() {
		console.log(`${this.#name} is moving!`)
	}

	eat() {
		console.log(`${this.#name} is eating!`)
	}
}

class Dog extends Animal {
	bark() {
		console.log(`gaf, gaf...`)
	}
}

const dog = new Dog('Charly')
const dog2 = new Dog('Jemy')

dog.move()
dog.eat()
dog.bark()

dog2.bark()
