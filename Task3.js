// task3  ----------------------------------------------------------
// инвертирование порядка символов введенной строки

let string = prompt("Enter string")

enstr=string.length
let reversString = ""
let lenstr=string.length
for (let i = lenstr; i >=0 ; i--) 
{ 
    reversString = reversString + string.slice(i-1, i)
}
console.log (reversString)

