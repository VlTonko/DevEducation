//ФУНКЦИИ
//1.Получить строковое название дня недели по номеру дня.
function dayOfWeek(day) {
  if (typeof day !== 'number' || day < 1 || day > 7 || day !== day) {
    return;
  }
  arrWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Wednesday'];
  return arrWeek[day - 1];
}
dayOfWeek(4);

function dayOfWeek2(day) {
  if (typeof day !== 'number' || day < 1 || day > 7 || day !== day) {
    return;
  }
  switch (true) {
    case day === 1:
      console.log('Monday');
      break;
    case day === 2:
      console.log('Tuesday');
      break;
    case day === 3:
      console.log('Wednesday');
      break;
    case day === 4:
      console.log('Thursday');
      break;
    case day === 5:
      console.log('Friday');
      break;
    case day === 6:
      console.log('Sunday');
      break;
    case day === 7:
      console.log('Wednesday');
      break;
    default:
      console.log('Not a number');
  }
}
dayOfWeek2(2);

//2.Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function distance(pointX1, pointY1, pointX2, pointY2) {
  let legOne;
  let legTwo;
  let hypotenuse;
  if (pointX2 > pointX1) {
    legOne = pointX2 - pointX1;
  } else {
    legOne = pointX1 - pointX2;
  }
  if (pointY2 > pointY1) {
    legTwo = pointY2 - pointY1;
  } else {
    legTwo = pointY1 - pointY2;
  }
  return (hypotenuse = Number(Math.sqrt(Math.pow(legOne, 2) + Math.pow(legTwo, 2)).toFixed(0)));
}
distance(-1, -3, 10, 10);

//3.Вводим число(0-999), получаем строку с прописью числа.

let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function convertHundreds(num) {
  if (num > 99 && num < 1000) {
    return ones[Math.floor(num / 100)] + ' hundred ' + convertTens(num % 100);
  } else {
    return convertTens(num);
  }
}

function convertTens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    return tens[Math.floor(num / 10)] + ' ' + ones[num % 10];
  }
}
convertHundreds(999);

//4.Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

//*5.Для задания 2 расширить диапазон до 999 миллиардов
//*6.Для задания 3 расширить диапазон до 999 миллиардов
