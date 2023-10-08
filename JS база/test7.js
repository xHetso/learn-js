/* Fetch */

/*
fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(response=>response.json())
.then(json=>console.log(json))
*/
/*
cath для обработки ошибок
*/
/*
fetch('https://jsonplaceholder.typicode.com/3213todos22/2')
.then(response=>response.json())
.then(json=>console.log(json))
.catch(e => console.error(e))
*/
/*
const fetchTodo = async()=>{
    try{ //Здесь выполняется то что успешно в трай, без ошибок
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')//получили данные
        const json = await response.json()//поменяли в Json
        console.log(json)//вывели
    } catch(e){//а если ошибка идет вылетает эксепшен вы попадаете сюда работаете с ошибкой
        console.error(e) //отлавливает ошибки
    }
}
fetchTodo ()
*/




