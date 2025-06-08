// Problem
// Create an array with 6 students names, after that create a function which takes 2 parameters (allStudents and studentName) iterate over all students and find that specific user "studentName"


// Take 1
console.log('Take 1')

const studentsList = ['charizard', 'Orion', 'Nyx', 'ruki', 'anya', "charizard"]

function findStudentsByName(allStudents, studentName) {
    for (let i = 0; i < allStudents.length; i++) {
        const cleanStudentName = studentName.toLowerCase()

        if (allStudents[i].toLowerCase() === cleanStudentName) {
            console.log(`${cleanStudentName} found.`)
            return;
        }
    }

    console.log(`${studentName} is not on the list.`);
}

findStudentsByName(studentsList, 'CharizarD')



// Take 2
console.log('\nTake 2')

const studentsList2 = ['charizard', 'Orion', 'Nyx', 'ruki', 'anya', "charizard"]

function findStudentsByName2(allStudents, studentName) {
    const cleanStudentName = studentName.toLowerCase()
    return allStudents.find(student => student.toLowerCase() === cleanStudentName)
}

const foundStudent = findStudentsByName2(studentsList2, 'RUKI')

foundStudent !== undefined ? console.log(`${foundStudent} found.`) : console.log(`The student is not on the list.`)

