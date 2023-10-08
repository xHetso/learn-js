//EcmaScript
/*
const firstName = 'Max'
const age = 24
//console.log(firstName + ': ' + age) такая запись уже не актуальна
console.log(`${firstName}: ${age}`)
*/

//REST операторы на примере функция; при помощи ... делаем REST оператор
/*
function sum(...numbers) {
	console.log(numbers)
}

sum(1, 2, 3)
*/
/*
function sum(...numbers) {
	return numbers.reduce((acc, item) => (acc += item), 0)
}

console.log(sum(1, 2, 3))
*/
const user = {
	name: 'Max',
	age: 25,
	city: 'SPB',
}
/*
// получаем данные при помощи деструктиризации
function getUser({ name, ...rest }) {
	return name
}

const userName = getUser(user)
console.log(userName)
*/
//обьединяем  обьекты
/*
const user2 = {
	country: 'Russia',
}

const main = {
	...user,
	...user2,
}

console.log(main)
*/
/*
const cities = ['SPB', 'MSK']
const cities2 = ['Tokyo', 'London']
const allCities = [...cities, ...cities2] //!concat работает быстрее
console.log(allCities)
*/

//с массива берем
/*
//с помощью Картежа забираем элементы
const cities = ['SPB', 'MSK']
const [city1, city2] = cities

console.log(city1, city2)
*/

//И в дистрюктизации можно с помощью картежа //с Обьекта берем age и выводим из консоли
/*
const { age } = user
console.log(age)
*/

/*
//Преобразования в строку
const number = 10
console.log(number.toString()) //1вариант
console.log(String(number))//2вариант есть отличия

//в число
const number = '10'
console.log(parseInt(number))//1Вариант
console.log(Number(number))//2variant
console.log(+number)//3var
*/
//можем писать числа через нижний пробел
//console.log(100_000_000)
/*
const text = 'Max, Misha, Semen, Max'
console.log(text.replaceAll('Max', ''))
*/

const numbers = [1, 2, 6, 3, 23]
console.log(numbers.at(-1))
