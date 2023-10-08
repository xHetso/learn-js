//ES10 2019

//flat превращает в обычный массив
/*
const cars=['mersedes','lada', 'audi',['lambo','mclaren']]
console.log(cars.flat())
*/

//Object from entries
/*
const person = {
    name: 'Max',
    age: 23,
    city: 'Minsk',
    getName(){
        return this.name
    }
}
*/
/* Преобразует массив в обьект
const personArray=[['name', 'Max'],['age','23']]
console.log(Object.fromEntries(personArray))
*/

//toString 2 варианта с числа на строку
const price = 100000
console.log(price.toString())
console.log(String(price))

//convert to Number 3варианта форматирование с строки в число
const priceString = '100000'
console.log(parseInt(priceString))
console.log(+priceString)
console.log(Number(priceString))