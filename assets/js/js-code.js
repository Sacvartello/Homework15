// 1
let numberCount = 1;
let numberPower = 0;
do {
  numberPower = numberCount ** 2;
  console.log(`Power of number ${numberCount} =`,(numberPower = numberCount ** 2));
  numberCount++;
} while (numberCount <= 10)
// 2
const PASSWORD = 12345678;
let inputPassword = null
do {
   inputPassword = Number(prompt('Введіть пароль:'))
}  while (PASSWORD !== inputPassword) 
console.log("Ви успішно увійшли в систему!")
// 3
let number = 1
for(sumOfnumbers = null; number<=100; number ++){
sumOfnumbers += number
}
console.log('Сума =', sumOfnumbers)
// 4
for (currentNumber = 10; currentNumber <=50; currentNumber += 5){
    console.log(currentNumber)
}
// 5
let mustHaveline = null
do {
    mustHaveline = Number(prompt("Введіть кількість рядків у піраміді:"))
} while (!Number.isFinite(mustHaveline));
let sumbol = "*"
for(lineCount = 1; lineCount <= mustHaveline; lineCount ++) {
    console.log(sumbol)
    sumbol = sumbol + "*"
}
// 6
let londOfSide= null
do {
    londOfSidee = Number(prompt("Введіть кількість рядків у піраміді:"))
} while (!Number.isFinite(londOfSide));
for(starCount = 1; starCount <= londOfSidee; starCount ++) {
    console.log(sumbol)
    sumbol = sumbol + "*"
}

