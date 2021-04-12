function Students(name, surname, group) {
    this.name = name;
    this.surname = surname;
    this.group = group;
    this.printStudent = function () {
        return `
            <div>
                <h3>ФИО: ${name}  ${surname}</h3>
                <p>Группа ${group}</p>
            </div>
        `
    }
} // class Students

function onBtnClick() {
    
    let view = document.getElementById('view');
    
    let studentData = document.getElementById('studentData');
    let arr = studentData.value.trim().split(' ');
    if (studentData.value != 'очистить') {
        view.innerHTML += new Students(arr[0], arr[1], arr[2]).printStudent();
        studentData.value = '';
    } else {
        view.innerHTML = '';
        studentData.value = '';
    }
} // onBtnClick