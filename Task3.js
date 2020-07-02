// task3  ----------------------------------------------------------
// инвертирование порядка символов введенной строки

// let string = prompt("Enter string")

// enstr=string.length
// let reversString = ""
// let lenstr=string.length
// for (let i = lenstr; i >=0 ; i--) 
// { 
//     reversString = reversString + string.slice(i-1, i)
// }
// console.log (reversString)

// Задание выполнено верно, но есть более простой и короткий вариант без использования цикла:

const string = "Hello";
const reverseString = string.split("").reverse().join("");
console.log(reverseString);