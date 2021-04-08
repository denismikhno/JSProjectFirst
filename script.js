/*
     Задача 1
     Есть массив let arr = [20, 25,-28, 12, 30,150, -15, -26, 324];
     Необходимо реализовать функцию которая вернет новый массив с положительными значениями.
*/
let arr = [20, 25,-28, 12, 30,150, -15, -26, 324];

function positiveArrElements(array) {
    return array.filter(function (element) {
        return element >= 0;
    })
}
let newArr = positiveArrElements(arr);
document.write(newArr);

/*
   Задача 2
   Пользователь вводит число, необходимо создать функцию которая принимает это число и проверяет,
   что оно больше 20 и меньше 50. Возвращает true или false.
*/
let num = prompt("Введите число:");

function isUserNumberInRange(number) {
   return (number > 20 && number < 50);
}
document.write('<br>');
document.write(isUserNumberInRange(num) ? "Введеное вами число входит в заданный диапазон" : "Введеное вами число не входит в заданный диапазон");

/*
    Задача 4
    Пользователь вводит число, необходимо сделайте функцию которая принимает целое число и проверяет
    результат четное оно или нет. Результат выводится пользователю в alert.
*/
let numUser = prompt("Введите число:");

function isNumberEvenOrOdd(number) {
     return number % 2 === 0 ? "Четное" : "Нечетное";
}
document.write('<br>');
document.write(isNumberEvenOrOdd(numUser));

/*
    Задача 5
    Написать функцию, получающую на вход два числа. Если оба числа четные - функция возвращает их произведение.
    Если оба числа нечетные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечетное - функция
    возвращает это нечётное число.
 */

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

function twoNumbers(number1, number2) {
     // если четное значение true
     let isNum1Even = number1 % 2 === 0;
     // усли четное значение true
     let isNum2Even = number2 % 2 === 0;
     // если оба числа четные вернуть произведение
     if (isNum1Even === true && isNum2Even === true) return number1 * number2;
     // если оба числа нечетные вернуть сумму
     if (isNum1Even === false && isNum2Even === false) return Number(number1) + Number(number2);
     // если четное первое число, возвращаем второе число, а если первое нечетное - возвращаем первое число
     else return isNum1Even ? number2 : number1;
}

document.write(twoNumbers(num1, num2));

/*
    Задача 6
    Написать функцию, пользователь вводит числа(любые) 5 раз, функция будет приводить их к целому числу и
    находить среднее значение.
 */

function averageValue() {
    let averageValue = 0;
    for (let i = 0; i < 5; i++) {
        averageValue += parseInt(prompt("Введите числа:"));
    }
    return averageValue / 2;
}

document.write(averageValue());

/*
    Задача 7
    Написать функцию, которая принимает параметры цвет фона, цвет текста, строку с текстом и выводит методом
    document.write() абзац с соответствующими стилями. Например, функция params("grey", "white", "Lorem ipsum sit amet") выведет абзац с текстом "Lorem ipsum sit amet" белого цвета на сером фоне.
 */