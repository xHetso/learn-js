/* Array methods */
const cities = ['London', 'New York', 'Madrid', 'Paris']

const students =[
    {
        name: 'John',
        age: 20,
        city: 'New York',
    },
    {
        name: 'Jane',
        age: 21,
        city: 'London',
    },
    {
        name: 'Jack',
        age: 19,
        city: 'Paris',
    }
]

/* map  || foreach*/
/* просто выводит forEach
cities.forEach(city=>console.log(city))
*/
/* map выводит в массив */
/*
console.log(cities.map(city=>city + '1'))
*/



/*filter*/
/*console.log(students.filter(student=>student.age>=20))*/

/*push & unshift*/
/*
cities.push('Berlin') 
console.log(cities)
*/
/*
cities.unshift('Berlin')
console.log(cities)
*/

/* slice */

//console.log(cities.slice(1,3))

/* find */
//console.log(students.find(student=>student.name == 'Jane'))

/* reduce */

/*
const cart = [{
    id: 1,
    name: 'Product 1',
    price: 100,

},
{
    id: 2,
    name: 'Product 2',
    price: 40,
},
{
    id: 3,
    name: 'Product 3',
    price: 260,
},
]
console.log(cart.reduce((total, product)=> total + product.price, 0))
*/