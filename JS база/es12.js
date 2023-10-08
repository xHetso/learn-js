// ES 12 2021

//replaceAll
const text = 'Max werg max erfgx max'
console.log(text.replaceAll('max','')) //удаляем все max-ы с текста

//new logical assignment operators
/*
let newText = ''
newText ||= text

console.log(newText)
*/
/*

let newText=''
newText ??=text

console.log(newText)

*/
/*
let newText = ''
newText &&= text

console.log(newText)
*/

//Numeric literal separators
const price = 100000000
const newPrice = 100_000_000
console.log(price)
console.log(newPrice)
