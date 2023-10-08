//array and object
const cities = ['Spb', 'Moskow', 'Tokyo']
const citiesUSA = ['New-York', 'LA']
/* 
cities.push('Seoul')//добавляет в конец
cities.unshift('Seoul')//добавляет в начало
*/
/*
const spb = cities.find(city => city === 'Spb')
console.log(spb)
*/
/*
const russianCities = cities.filter(city => city !== 'Tokyo')
console.log(russianCities)

const russianCities = cities.some(city => city !== 'Tokyo')
console.log(russianCities)
*/

/*
const cities1 = ['Spb', 'Moscow', ['Tokyo']]
console.log(cities1.flat())
*/
/*
const cart = [
	{
		name: 'BMW',
		price: 100_000,
	},
	{
		name: 'Merced',
		price: 200_000,
	},
]

const sum = cart.reduce((acc, product) => (acc += product.price), 0)
//или так можно написать более понятно
const sum = cart.reduce((acc, product) => {
	return acc += product.price
}, 0)

console.log(sum)
*/

//cities.push('Seoul')
//console.log(cities.concat(citiesUSA))//обьединяет два массива
//console.log(cities.slice(0,1))//выбирает кусок массива и позволяет его получить от 0 до 1 по индексу
//console.log(cities.splice(0, 1, 'London'))//меняет первый элемент на Лондон
//console.log(cities.splice(0, 2))// третий элемент массива удаляется
//console.log(cities.reverse())//переворачивает массив

/*
//sort
const numbers = [5, 2, 10, 1, 7]
//console.log(numbers.sort())
console.log(
	numbers.sort((a, b) => {
		return a - b
	})
)
*/

const user = {
	firstName: 'Max',
	company: 'htmllessons.ru',
	age: 24,
}
//console.log(Object.values(user))
//console.log(Object.keys(user))
//console.log(Object.entries(user).flat())
console.log(
	Object.assign(user, {
		//приплюсуем обьект
		isOwner: true,
	})
)
