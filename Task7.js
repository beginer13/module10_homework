<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2020 by anonymous (http://jsbin.com/kahoxuligo/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.

let arr =[1, 345, 'jhlh', 17, 782, 185, 0, 0, 66, 799, null, null, null, 'asd', 8]

let i = 0
let chet = 0
let nechet = 0
let elem0 =0
let elemnull =0
let string = 0

do { 
      if (isNaN(+ arr[i])) { string ++ }
      else if (arr[i] == null) { elemnull ++ }
      else if (arr[i] == 0) { elem0 ++ }    
      else if (arr[i]%2 > 0) { nechet ++ } 
      else if (arr[i]%2 == 0) { chet ++ }
      i++
    } while (i < arr.length)
        
  console.log('Всего элементов - ' + arr.length)
  console.log("Нечетных - " + nechet)
  console.log("Четных - " + chet)
  console.log("Строк - " + string)
  console.log("Нулей - " + elem0)
  console.log("null - " + elemnull)
  
 

  
  
  
 

</script>
</body>
</html>