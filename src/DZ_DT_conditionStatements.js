//УСЛОВНЫЕ ОПЕРАТОРЫ
//1. Если а - четное посчитать а*б, иначе а+б
function evenOdd(a, b) {
  return a % 2 === 0 ? a * b : a + b;
}
evenOdd(2, 5);

//2.Определить какой четверти принадлежит точка с координатами (х,у)
function searchPoint(pointX, pointY) {
  if (typeof pointX === 'number' && typeof pointY === 'number' && pointX === pointX && pointY === pointY) {
    switch (true) {
      case pointX > 0 && pointY > 0:
        return 'First quarter';
        break;
      case pointX < 0 && pointY > 0:
        return 'Second quarter';
        break;
      case pointX < 0 && pointY < 0:
        return 'Third quarter';
        break;
      case pointX > 0 && pointY < 0:
        return 'Fourth quarter';
        break;
      default:
        return 'Another universe';
    }
  } else {
    return;
  }
}

searchPoint(10, -10);

//3.Найти суммы только положительных из трех чисел
function sumPositivNum(arr){
  let sum = 0;
    for (let i of arr) {
      if (typeof i === 'number' && i > 0 && i === i) {
        sum += i;
      }
    }
  return sum;
};

sumPositivNum([true, -3, 5]);

//4.Посчитать выражение (макс(а*б*с, а+б+с))+3
function expression(a, b, c) {
  if (typeof a === 'number' && a === a && typeof b === 'number' && b === b && typeof c === 'number' && c === c) {
    return a + b + c < a * b * c ? a * b * c + 3 : a + b + c + 3;
  }
}
expression(1, 3, 5);

//5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил
// Рейтинги       0-19  F      20-39  E       40-59  D     60-74  C     75-89  B     90-100  A
function defineGrade(rating) {
  if (typeof rating !== 'number' || rating < 0 || rating > 100) {
    return;
  }

  switch (true) {
    case rating >= 0 && rating <= 19:
      return 'F';
    case rating >= 20 && rating <= 39:
      return 'E';
    case rating >= 40 && rating <= 59:
      return 'D';
    case rating >= 60 && rating <= 74:
      return 'C';
    case rating >= 75 && rating <= 89:
      return 'B';
    case rating >= 90 && rating <= 100:
      return 'A';
    default:
      return 'Not a number';
  }
}
defineGrade(5);
