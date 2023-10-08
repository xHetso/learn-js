/* Condition Сравнение */

/*
function getCarName(price){
    if(price > 100000){
        return "BMW"
        throw new Error('wefw')
    }
    if(price > 50000){
        return "Audi"
    }
    if(price > 20000){
        return "Toyota"
    }
    return "Honda"
}
console.log(getCarName(75000))
*/

/* Стрелочными
const getCarName = (price) => price > 100000 ? 'BMW' : price > 50000 ? 'Audi':price>20000 ? 'Toyota':'Honda'

console.log(getCarName(100))
*/


/* switch */
const getFruit =(fruit='Papayas')=>{
    switch (fruit) {
        case 'Oranges':
            console.log('Oranges are $0.59 a pound.');
            break;
        case 'Mangoes':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // Expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
        }
}

getFruit()



