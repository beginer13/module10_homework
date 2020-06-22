// task6__________________________________________________________________
// Дан массив. Проверить, одинаковые ли элементы в массиве 
// и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.

arr = [1,1,1,1,1,1,1]
let result1 = true
arr.map(function(item, index, array) {
  result = (arr[index] == arr[index+1])
  if (result==false && typeof(arr[index+1]) != "undefined") 
      {result1=false}
  return result2=result1})

 console.log(result2)
if (result2 == false) { 
  console.log("Есть два или более не одиноковых елемента")}
 else console.log("Все элементы одинаковы")

// ну или так

let arr = [1,1,1,1,1,1,1]
let res = arr.reduce(function(acc, x) { return acc && (acc == x) }, true)
console.log(res)
