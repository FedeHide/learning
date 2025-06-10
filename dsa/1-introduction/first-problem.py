# Problem
# Create an array with 6 students names, after that create a function which takes 2 parameters (allStudents and studentName) iterate over all students and find that specific user "studentName"


# Take 1
print("Take 1")

students_list = {"charizard", "Orion", "Nyx", "ruki", "anya", "charizard"}


def find_students_by_name(allStudents, studentName):
    cleanStudentName = studentName.lower()

    for student in allStudents:
        if student.lower() == cleanStudentName:
            print(f"{cleanStudentName} found.")
            return

    print(f"{studentName} is not on the list.")


find_students_by_name(students_list, "CharizarD")


# Take 2
print("\nTake 2")


def find_students_by_name_2(allStudents, studentName):
    cleanStudentName = studentName.lower()
    allStudentsCleaned = set()

    for student in allStudents:
        allStudentsCleaned.add(student.lower())

    res = (
        f"{cleanStudentName} found."
        if cleanStudentName in allStudentsCleaned
        else f"{studentName} is not on the list."
    )

    print(res)


find_students_by_name_2(students_list, "RUKIS")
