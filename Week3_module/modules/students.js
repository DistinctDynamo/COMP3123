let students = [{id:1, name:"Alice"},
        {id:2, name:"Bob"},
        {id:3, name:"Charlie"}
    ];


exports.getStudents = () => {
    return students
}

exports.addStudent = (student) => {
    students.push(student);
    console.log(`Student ${student.name} added.`)
}

//module.exports = {getStudents, addStudent};