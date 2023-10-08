document.querySelector('body').style.backgroundColor ='#222'

const headingElem = document.querySelector('h1')

headingElem.style.fontSize = '50px'
headingElem.style.color = '#fff'

/*headingElem.innerHTML = '<i>JS Basics</i>' /* не безопасно */
headingElem.append('JS Basics') /* Более безопасный способ */

