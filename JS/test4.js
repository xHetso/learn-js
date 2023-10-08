const students = [
	{
		name: 'Vasya',
		age: 24,
	},
	{
		name: 'Elena',
		age: 21,
	},
]
/*
for (let index = 0; index < students.length; index++) {
	const student = students[index]
	student.isStudent = true
}

console.log(students)
*/
//более актуально так писать
/*
for (const student of students) {
	student.isStudent = true
}
*/

/*//Если хотим получить индекс пишем так:
for (const [index,student] of students) {
	student.isStudent = true
	student.id = index + 1
}
*/

/*//map, for of, forEach часто используется по статистике for of работает быстрее чем ForEach
students = students.map((student, index) => {
	student.isStudent = true
	student.id = index + 1
	return student
})
*/

/*
students = students.forEach((student, index) => {
	student.isStudent = true
	student.id = index + 1
	return student
})
*/

console.log(students)
