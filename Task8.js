Task8 ____________________________________________________________
// Создайте произвольный массив Map. Получите его ключи и выведите в 
// консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


let animal = new Map ([
  ["squirrel", "red"],
  ["elephant", "grey"],
  ["dog", "black"],
  ["cat", "brown"]
])

  for (let name of animal.keys()) {
    console.log(`Key - ${name}, value - ${animal.get(name)}`)
}
