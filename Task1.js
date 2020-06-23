// task1 ----------------------------------------------------------
// определение типа Number  и четности введенного значения

let anser = prompt ("Enter anything")
let anserNum = + anser
if (isNaN(anserNum)) {
  alert ("Упс, Вы кажется ошиблись")
} else {
  if (anserNum%2 >0) {
    let chet="число не четное"
  } else {
    let chet='число четное'
  }
  alert (" Ваше число " + anserNum + ', ' + chet)
}
