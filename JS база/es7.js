//ES7 - 2016

// defaul parameter
/*
const getPrice = (name ='Mersedes')=>{
    if(name == 'Mersedes') return 900000
    if(name == Lada) return 10000
}

console.log(getPrice())
*/

//spread-destruncturisation
/*
const language={
    name:'RU',
    level: 'difficult'
}
const languagePopulation={
    population: 4000000
}
console.log({...language, ...languagePopulation})
*/
/*
const namesFirst=['Max','Aynaz']
const namesSecond=['Anarbek',Vitaly]
console.log([...namesFirst, ...namesSecond])
*/

const{name, ...rest}={
    name:'RU',
    level: 'difficult'
}

const [firstName, secondName, lastName] = ['Max','Aynaz', 'Evgeny']

console.log(secondName)

//function f(arg1, ...rest){

//}