


/* Data type*/
/*Маленькая затем Большая при наименование*/
/*
const firstName = 'John' /* string 
const age = 30 /* Number
const isStudent= true /*Bolean значение
const x = null /* несуществует 
const y = undefined /* несуществует 
*/

const person={
    firstName: 'John',
    age: 30,
    inStudent: true,
    cities: ['New York', 'London', 'Paris'],
    getName(){
        return this.firstName
    }
}

/*const people = [person, 'John', 'Jane']*/

console.log(person.getName())