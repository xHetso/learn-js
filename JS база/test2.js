/*
function getName(){
    return 'John'
}
есть у них контекст this.
console.log(getName())
*/
/*
function getName(name){
    return name
}
console.log(getName('Max'))
*/

//ES6 здесь у них своего контекста нету
//cтрелочная функция, не нужен контекст
/* Вариант обычной и вариант со стрелочной */
/*
function getName(name){
    return name
}
*/
/* если функция принимает один параметр то функцию можно опустить
const getName = (name) =>{
    return name
}
console.log(getName('Sergio'))
*/
/*Если идет просто возврат, тоисть return и больше ничего нет то можно просто написать вот так:
сonst getName = name => name
console.log(getName('Sergio'))
*/
/*
const sum = (number1, number2) =>{
    return number1+number2
}

console.log(sum(1,2))
*/
/*
const sum =(number1,number2)=>number1+number2
console.log(sum(1,2))
*/

