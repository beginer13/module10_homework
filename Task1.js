// task1 ----------------------------------------------------------
// определение типа Number  и четности введенного значения

anser = prompt ("Enter anything")
anserNum = + anser
if (isNaN(anserNum)) {
  alert ("Упс, Вы кажется ошиблись")
}
else
   { if (anserNum%2 >0) {
     chet="число не четное"
   }
     else {chet='число четное'}
        alert (" Ваше число " + anserNum + ', ' + chet)
  }
