//Запросы к серверу и промисы
//каждый запрос на сервер является промисом, это является асинхронным действием
//синхронная это то что выполняется по очереди
//асинхронная это то что не выполняется моментально, надо подождать когда придет данные серверы, либо интервалы

/*
fetch('https://jsonplaceholder.typicode.com/todosd/1')
	.then(data => data.json())
	.then(console.log) //.then(data=>console.log(data))
*/

/*
let isLoading = true

fetch('https://jsonplaceholder.typicode.com/todosd/1')
	.then(data => {
		if (data.ok) return data.json()
		return data.statusText
	}) //then после,catch отлавливаем ошибку,finally либо то либо то без разницы
	.then(console.log) //then.(data=>console.log(data))
	.catch(err => console.error(err))
	.finally(() => {
		isLoading = false
	})

console.log(isLoading)
*/

//Переписываем современным Экмаскриптом
const fetchData = async () => {
	console.log('Loading...')

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
		if (!response.ok) console.log(data.statusText)

		const data = await response.json()
		return console.log(data)
	} catch (error) {
		console.log(error)
	} finally {
		console.log('loaded')
	}
}

fetchData()
