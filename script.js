/*
    Задача 1
    Есть строка  'Hello - World, Hello! We are, here to answer,  all your - questions.' Необходимо вывести новую
    строку в документ и замените все Hello на Привет.
 */

let str = 'Hello - World, Hello! We are, here to answer,  all your - questions.';
const search = 'Hello';
const replace = 'Привет';
while (str.includes('Hello')) {
    str = str.replace(search, replace);
}
document.write(str);
document.write('<br>');
let newStr = str.split(replace).join(search);
document.write(newStr);

/*
    Задача 2
    Заменить в строке из задачи 1 , слово Hello на Привет используя глобальный поиск с помощью регулярного выражения.
 */

const searchRegExp = /Hello/g;
const replaceWith = 'Привет';

let resultStr = str.replace(searchRegExp, replaceWith);
document.write('<br>');
document.write(resultStr);

/*
    Задача 3
    Вырезать из строки в задаче 1  слово  Hello тремя разными способами (substr, substring, slice).
 */

/*
    Задача 4
    Преобразовать строку из задачи 1 в верхний и нижний регистр.
 */
str = 'Hello - World, Hello! We are, here to answer,  all your - questions.';
document.write('<br>');
document.write(str.toLowerCase());
document.write('<br>');
document.write(str.toUpperCase());
document.write('<br>');

/*
    Задача 5
    Найти  количество символов в строке из задачи 1.
 */
str = 'Hello - World, Hello! We are, here to answer, all your - questions.';
document.write("Количество символов в строке = " + str.length);
document.write('<br>');

/*
    Задача 6
    Найти позицию подстроки We в строке из задачи 1.
 */
str = 'Hello - World, Hello! We are, here to answer,  all your - questions.';
document.write("Позиция подстроки 'We' в строке = " + str.indexOf('We'));
document.write('<br>');

/*
    Задача 7
    Создать  массив из строки в задаче 1 с разделителем “,”
 */

str = 'Hello - World, Hello! We are, here to answer,  all your - questions.';
let arr = [];
arr = str.split(',');
for (item of arr) {
    document.write(item);
    document.write('<br>');
}

/*
    Задача 8
    Сделать первую букву каждого слова строки из задачи 1 в верхнем регистре.
 */
str = 'Hello - World, Hello! We are, here to answer,  all your - questions.';
// создаем из строки массив слов по разделителю пробел
let arrStr = str.split(' ');
// map берет каждое слово в массиве делает первый символ заглавным и прибавляет к нему остальное слово без нулевого элемента
let resStr = arrStr.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
    // и джойнит массив в строку разделяя слова пробелами
}).join(' ');
document.write(resStr);

/*
    Задача 9
    Необходимо  преобразовать строку 'str_join_method' в такой вид 'strJoinMethod'.
 */
str = 'str_join_method';
str = str.split('_').join('');
document.write('<br>');
document.write(str);

/*
    Задача 10
    Реализовать гибкий метод удаления половины строки. Метод должен работать для любой длины входящей строки.
 */
