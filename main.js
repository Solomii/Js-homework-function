// 1. Напишіть функцію, що повертає куб числа.
// function cube(a) {
//   return Math.pow(a, 3);
// }
// console.log(cube(6));

// function cube(a) {
//   return a * a * a;
// }
// console.log(cube(6));

// Напишіть функцію, що додає перше число до другого і ділить
// результат на третє число.
// function numberFunction(a, b, c) {
//   return (a + b) / c;
// }
// console.log(numberFunction(10, 5, 3));

// function numberFunction(a, b) {
//   return a + b;
// }
// let x = numberFunction(10, 8) / 9;
// console.log(x);

// Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну
// назву дня(українською).

// let buttonDay = +prompt("Виберіть число від 1 до 7.");
// if (buttonDay > 8 || buttonDay < 1) {
//   alert("Ви не ввели число від 1 до 7!");
// } else {
//   console.log(weekdayFunction(buttonDay));
// }
// function weekdayFunction(buttonDay) {
//   let arr = [
//     "Понеділок",
//     "Вівторок",
//     "Середа",
//     "Четвер",
//     "П'ятниця",
//     "Субота",
//     "Неділя",
//   ];

//   return arr[buttonDay - 1];
// }

// 4. Реалізуйте функцію знаходження факторіала
// const factorial = function (n) {
//   if (n !== 1) {
//     return n * factorial(n - 1);
//   } else return 1;
// };
// console.log(factorial(5));

// const factorial = function (n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// };
// console.log(factorial(6));

// 5.  Напишіть функцію якаотримує години хвилини та секунди і
// повертає це число в секундах.
// let timeQuestion = prompt("Enter the time (hours, minutes, seconds)");
// let time = timeQuestion.split(", ");
// console.log(timeToSeconds(time[0], time[1], time[2]));
// function timeToSeconds(hours, minutes, seconds) {
//   return hours * 3600 + minutes * 60 + Number(seconds);
// }

// 6. Написати функцію, яка приймає секунди, і перетворює їх у години хвилини та
// секунди у форматі «гг: хх: сс».якщо кількість годин більша за 23.59.59 -
//  вивести повідомлення "Більше одного дня".

let secondsQuestion = prompt("Введіть секунди.");

console.log(timeConverter(secondsQuestion));

function timeConverter(timeInSeconds) {
  if (timeInSeconds > 86399) {
    return "Більше одного дня";
  }
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds = Math.floor(timeInSeconds % 60);
  return hours + ":" + minutes + ":" + seconds;
}

// 7. 4 відмінності ерров фанкшина від звичайної функції:
// 1) у ерров фанкшина нема "this", якщо воно(this) використовується, то його
// значення береться зовні.
// 2) ерров не має "arguments".
// 3) не можуть бути викликані за допомогою "new".
// 4) не мають "super".Коли ми хочемо звернутися до нього(super) в ерров фанкшин,
// то беремо його зовнішньої функції.
