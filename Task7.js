//task7________________________________________________________________
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в
// массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится  
// отдельно. При выполнении задания необходимо учесть, что массив может содержать // не только числа, но и, например, знаки, null и так далее.

let arr =[1, 2, 345, 'jhlh', 17, 782, 185, 0, 0, 66, 799, null, null, 'asd']

let i = 0
let chet = 0
let nechet = 0
let elem0 = 0
let elemnull = 0
let string = 0


do { 
      if (isNaN(+ arr[i])) { string ++ }
      else if (arr[i] == null) { elemnull ++ }
      else if (arr[i] == 0) { elem0 ++ }    
      else if (arr[i]%2 > 0) { nechet ++ } 
      else if (arr[i]%2 == 0) { chet ++ }
      i++
    } while (i < arr.length)
        
  console.log ('Всего элементов - ' + arr.length)
  console.log ("Нечетных - " + nechet)
  console.log ("Четных - " + chet)
  console.log ("Строк - " + string)
  console.log ("Нулей - " + elem0)
  console.log ("null - " + elemnull)

// в принципе можно дописать проверку на true  и false, просто добавив else if
 
