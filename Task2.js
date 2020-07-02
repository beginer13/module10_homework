// task2 ----------------------------------------------------------
// определение типа переменной

// 1. В Javascript нет логического оператора or, в смысле логического ИЛИ используется оператор ||
// 2. В данном случае нет необходимости использовать проверку isNaN
// Исправленный вариант:

var x = 78

// console.log(typeof(x))
// console.log(x)
if (typeof(x)=="boolean") 
{
    console.log("x - boolean var")
} 
else if (typeof(x)=="number") 
{
    console.log("x - number var") 
}
else if (typeof(x)=="string") 
{ 
    console.log("x - string var") 
}
else {console.log("Тип неопределен")}

