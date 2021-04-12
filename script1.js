/*
let str = 'Hello world Hello  Hello';

let pat = /Hello/g;

let res = str.replace( pat, 'Привет');

let res1 = str.split( 'Hello').join('Привет');

alert(res1);*/

function onBtnClick(){
    let view = document.getElementById('view');
    let name = document.getElementById('name');

    if (name.value != 'clear'){
        view.innerHTML += name.value + '<br>';
        name.value = '';
    }
    else view.innerHTML = '';


   // console.log(name.value);
}




let user = {
  name: 'Vasya',
  surname: 'Pupkin',
  group:5,
  print: function () {

      // alert(this.name);
      // alert(this.surname);
      // alert('enable');
  }
};

function Students(name, surname, group){
    this.name = name;
    this.surname = surname;
    this.group = group;
    this.print = function () {
       document.write(`<div>
          <h2>${this.name}  ${this.surname}</h2>
          <p>${this.group}</p>
         </div>`);
        
    };

}


//let user1 = new Students('Petr', 'Ivanov', 2010);

/*
let students = [];
let str;

for (let i = 0; i < 3; i++){
    str = prompt('Введи имя фамилию группу');
    let arr = str.trim().split(' ');
    students.push(new Students(arr[0],arr[1],arr[2]))
}

for (let i = 0; i<students.length; i++){
    students[i].print();
}
*/



// user1.print();

//
// for (let prop in user ) {
//     console.log(user[prop]);
// }



user.print();
// alert(user.name);
// document.write(user.name.length);
// //alert(user['surname']);
