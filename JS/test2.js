//Функция и условия fn & condition
/*
const channelName = 'Hetso'

function getChannelName() {
	return channelName
}

console.log(getChannelName())
*/

function summ(number1, number2) {
	if (number1 === 0) {
		return 'Первое число не должно быть 0!'
	} else {
		return number1 + number2
	}
}

// Тернарные операторы
function sum(number1, number2) {
	return number1 === 0 ? 'Первое число не должно быть 0!' : number1 + number2
}

console.log(sum(0, 5))

//стрелочная функция
//cтрелочка уже означает что мы возвращаем return
const minuss = (number1, number2) =>
	number1 === 0 ? 'Первое число не должно быть 0!' : number1 - number2

console.log(minuss(10, 5))

const minus = (number1, number2 = 20) => {
	console.log('minus', this)
	return number1 === 0 ? 'Первое число не должно быть 0!' : number1 - number2
}

console.log(minus(100))

//fn & condition

function getPrice(name) {
	switch (name) {
		case 'BMW':
			return '$100 000'
		case 'Mercedes':
			return '$200 000'
		case 'McLaren':
			return '$400 000'
		case 'Audi':
			return '$50 000'

		default:
			return 'Такой машины нет'
	}
}

console.log(getPrice('BMW'))
