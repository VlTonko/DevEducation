//УСЛОВНЫЕ ОПЕРАТОРЫ
//1. Если а - четное посчитать а*б, иначе а+б
let a = 2;
let b = 6;
let result = a % 0 === 0 ? a * b : a + b;

console.log(result);

//2.Определить какой четверти принадлежит точка с координатами (х,у)
let pointX = 10;
let pointY = -10;

function searchPoint(pointX, pointY) {
  if (
    typeof pointX === 'number' &&
    typeof pointY === 'number' &&
    pointX === pointX &&
    pointY === pointY
  ) {
    switch (true) {
      case pointX > 0 && pointY > 0:
        console.log('First quarter');
        break;
      case pointX < 0 && pointY > 0:
        console.log('Second quarter');
        break;
      case pointX < 0 && pointY < 0:
        console.log('Third quarter');
        break;
      case pointX > 0 && pointY < 0:
        console.log('Fourth quarter');
        break;
      default:
        console.log('Another universe');
    }
  } else {
    return;
  }
}

searchPoint(pointX, pointY);

//3.Найти суммы только положительных из трех чисел
const arr = [true, -3, 5];
let sum = 0;
for (let i of arr) {
  if (typeof i === 'number' && i > 0 && i === i) {
    sum += i;
  }
}
console.log(sum);

//4.Посчитать выражение (макс(а*б*с, а+б+с))+3
let a = 1;
let b = 3;
let c = 5;
function expression(a, b, c) {
  if (
    typeof a === 'number' &&
    a === a &&
    typeof b === 'number' &&
    b === b &&
    typeof c === 'number' &&
    c === c
  ) {
    let result = Math.max(a + b + c, a * b * c) + 3;
    console.log(result);
  }
}
expression(a, b, c);

//5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// Рейтинги       0-19  F      20-39  E       40-59  D     60-74  C     75-89  B     90-100  A
let rating = 26;

function defineGrade(rating) {
  if (typeof rating !== 'number' || rating < 0 || rating > 100) {
    return;
  }

  let grade = '';
  switch (true) {
    case rating >= 0 && rating <= 19:
      grade = 'F';
      console.log(grade);
      break;
    case rating >= 20 && rating <= 39:
      grade = 'E';
      console.log(grade);
      break;
    case rating >= 40 && rating <= 59:
      grade = 'D';
      console.log(grade);
      break;
    case rating >= 60 && rating <= 74:
      grade = 'C';
      console.log(grade);
      break;
    case rating >= 75 && rating <= 89:
      grade = 'B';
      console.log(grade);
      break;
    case rating >= 90 && rating <= 100:
      grade = 'A';
      console.log(grade);
      break;
    default:
      console.log('Not a number');
  }
}
defineGrade(rating);
