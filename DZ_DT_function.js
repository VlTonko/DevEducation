//ФУНКЦИИ
//1.Получить строковое название дня недели по номеру дня.
function dayOfWeek(day) {
  if (typeof day !== "number" || day < 1 || day > 7 || day !== day) {
    return;
  }
  switch (true) {
    case day === 1:
      console.log("Monday");
      break;
    case day === 2:
      console.log("Tuesday");
      break;
    case day === 3:
      console.log("Wednesday");
      break;
    case day === 4:
      console.log("Thursday");
      break;
    case day === 5:
      console.log("Friday");
      break;
    case day === 6:
      console.log("Sunday");
      break;
    case day === 7:
      console.log("Wednesday");
      break;
    default:
      console.log("Not a number");
  }
}
dayOfWeek(2);

function dayOfWeek2(day) {
  if (typeof day !== "number" || day < 1 || day > 7 || day !== day) {
    return;
  }
  arrWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sunday",
    "Wednesday",
  ];
  console.log(arrWeek[day - 1]);
}
dayOfWeek2(4);

//2.Найти расстояние между двумя точками в двухмерном декартовом пространстве.
let x1 = -1;
let y1 = -3;
let x2 = 10;
let y2 = 10;

function distance(x1, y1, x2, y2) {
  let legOne;
  let legTwo;
  let hypotenuse;
  if (x2 > x1) {
    legOne = x2 - x1;
  } else {
    legOne = x1 - x2;
  }
  if (y2 > y1) {
    legTwo = y2 - y1;
  } else {
    legTwo = y1 - y2;
  }
  hypotenuse = Math.sqrt(Math.pow(legOne, 2) + Math.pow(legTwo, 2)).toFixed(2);
  console.log(hypotenuse);
}
distance(x1, y1, x2, y2);

//3.Вводим число(0-999), получаем строку с прописью числа.
//4.Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
//*6.Для задания 2 расширить диапазон до 999 миллиардов
//*7.Для задания 3 расширить диапазон до 999 миллиардов
