const listStudent = [];

class Student {

    static addStudent(name, age, isFemale) {
        let student = {
            name: name,
            age: age,
            isFemale: isFemale
        };
        listStudent.push(student);
    };

    static getStudentByIndex(index) {
        if (index !== undefined && Number.isInteger) {
            console.log('Information of student have index ' + index + ': ');
            if (listStudent[index] !== undefined) {
                console.log(listStudent[index]);
            } else {
                console.log('No have student with index is:' + index);
            }
        }
    }

    static getStudentByName(name) {
        let index = listStudent.findIndex(student => student.name === name);
        if (index === -1) {
            console.log('No have student ' + name);
        } else {
            console.log('Information of student have index ' + name + ': ');
            console.log(listStudent[index]);
        }
    }

    static deleteStudentByName(name) {
        let index = listStudent.findIndex(student => student.name === name);
        if (index === -1) {
            console.log('No have student ' + name);
        } else {
            listStudent.splice(index, 1);
            console.log('List student after remove ' + name);
            console.log(listStudent);
        }
    }
}

Student.addStudent('Phong', 12, true);
Student.addStudent('Nhi', 12, true);
Student.addStudent('Tan', 12, true);
Student.addStudent('Hien', 12, true)
Student.getStudentByName('Nhi');
Student.deleteStudentByName('Phong');
Student.getStudentByIndex(1);

