/*
    Задача 1
    Есть два массива: [10, 15,'Ivanov'] и [25, 30, ‘20’,’Petrov’], необходимо объединить их вместе,
    вывести результат в виде строки в документ.
 */
let arr1 = [10, 15,'Ivanov'];
let arr2 = [25, 30, '20','Petrov'];
let arr = arr1.concat(arr2);
document.write('Задача 1', '<br>');
document.write('--------------------------------------------------', '<br>');
document.write('Массив №1:', '<br>');
document.write(arr1, '<br>');
document.write('<br>');
document.write('Массив №2:', '<br>');
document.write(arr2, '<br>');
document.write('<br>');
document.write('Массивы объединены:', '<br>');
document.write(arr);
document.write('<br>');

/*
    Задача 2
    Из объединенного массива  по Задаче 1 создать 2 массива первый будет содержать только цифры второй строки,
    результат вывести в консоль
*/
// обнулим массивы
arr1 = [];
arr2 = [];
for (let element of arr) {
    if (typeof element === "number") arr1.push(element);
    else arr2.push(element);
} // for
document.write('<br>');
document.write('Задача 2', '<br>');
document.write('--------------------------------------------------', '<br>');
document.write('Объединенный массив содержит только числа:', '<br>');
document.write(arr1, '<br>');
document.write('<br>');
document.write('Объединенный массив содержит только строки:', '<br>');
document.write(arr2, '<br>');
document.write('<br>');

/*
    Задача 3
    Пользователь вводит пять раз числа, из этих чисел необходимо создать массив и вывести каждый элемент в
    документ через перенос строки в виде -  Число 1 => 25
*/
arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(prompt("Введите число:"));
} // for
document.write('Задача 3', '<br>');
document.write('--------------------------------------------------', '<br>');
for (let i = 0; i < arr.length; i++) {
    document.write('Число ' + (i + 1) + ' ' + '=>' + arr[i] + '<br>');
} // for
document.write('<br>');

/*
    Задача 4
    Есть массив [25, 39, 48, 50, 14], необходимо создать новый массив в котором  после второго элемента будут
    такие новые элементы -  28, 39, 50, 99 , результат вывести в консоль.
*/
arr = [25, 39, 48, 50, 14];
arr.splice(2, 0, 28, 39, 50, 99);
document.write('Задача 4', '<br>');
document.write('--------------------------------------------------', '<br>');
document.write('Результат в консоли');
document.write('<br>');
console.log(arr);

/*
    Задача 5
    Есть  массив [25, 39, 48, 50, 14, 255, 148, 300,15], необходимо создать новый массив в котором будут только
    такие элементы [ 255, 148, 300].
*/
arr1 = [25, 39, 48, 50, 14, 255, 148, 300,15];
arr = arr1.slice(5,8);
document.write('<br>');
document.write('Задача 5', '<br>');
document.write('--------------------------------------------------', '<br>');
document.write('Исходный массив:', '<br>');
document.write(arr1, '<br>');
document.write('<br>');
document.write('Массив с нужными элементами:', '<br>');
document.write(arr, '<br>');
document.write('<br>');

/*
    Задача 6
    Пользователь вводит число 5 раз, необходимо вывести при помощи функции  alert информацию про максимальное
    введенное число.
*/
arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(prompt("Введите числа для определения максимального из них"));
}
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (parseInt(arr[i]) > parseInt(max)) max = arr[i];
} // for
alert("Максимальное число = " + max);
