/*
//Основы JS
//const, let
//типы объявления переменных
const firstName = 'Max'
let age = 24
age = 25
console.log(age)
*/

/*
const names =['Max', 'Sergey']

names.push('semen')

console.log(names)
*/

const firstName = 'Max' //string
const lastName = null //null
const age = 24 //number
const city = undefined //undefined
const isOwner = true //boolean

/*
const user = {
	firstName: firstName,
	lastName: lastName,
	age: age,
	city: city,
	isOwner: isOwner
}
*/
const user = {
	firstName,
	lastName,
	age,
	city,
	isOwner,
} //Object

user.age = 26

console.log(user)
