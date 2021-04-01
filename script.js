//let conf = confirm('Тебе есть 18?');
//document.write(conf);

var name = 'Dima';

// (function() {
//     var name = 'Petr';
//     console.log(window.name);
//         alert(name) ;
//
// }());


var surName = 'Petr';


function increes(arr, num) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
       res.push(arr[i] + num);
    }
    return res;

}

console.log(increes([5,20,28,30,55],50));