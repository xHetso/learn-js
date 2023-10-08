//Работа с DOM и слушатели

/*
document.querySelector('body').style.backgroundColor = '#21202E'
*/
const body = document.querySelector('body')
body.style.backgroundColor = '#21202E'
body.style.color = 'white'

const heading = body.querySelector('.heading')
/*heading.innerHTML='<b>htmllessons.ru</b>'//меняет структуру*/

heading.textContent = 'htmllessons.ru' //текст чисто меняем
/*
heading.classList.add('') //Добавим класс какой нибудь
heading.attributes('') //Добавим атрибут какой нибудь
*/
const button = body.querySelector('button')

button.addEventListener('click', () => {
	const type = prompt('Type?')
	/*
	if (type === 'green') {
		heading.style.color = '#60FFCA'
	} else {heading.style.color = '#FFCA85'}
	*/
	heading.style.color = type === 'green' ? '#60FFCA' : '#FFCA85'
})
