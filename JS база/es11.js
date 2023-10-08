//ES11 - 2020

//Optional chaining
const phone ={
    model: {name: 'Samsung'},
    price: 1000
}
//old
if(phone.brand)
    console.log(phone.brand)

//new
console.log(phone?.brand)

//Nullish Coalesing '||'
//const brand = phone?.brand || 'Samsung'
//console.log(brand)
//const age = 0
//console.log(age || '23')

//Nullish Coalescing '??'
// const age = 0
// console.log(age ?? '23')

//&&
// const brand = phone?.brand && phone.brand
// const brand = phone?.brand && phone.brand : null
// console.log(brand)