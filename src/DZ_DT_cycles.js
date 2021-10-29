//ЦИКЛЫ
//1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99
let sum = 0;
let count = 0;
for (i = 1; i <= 99; i++) {
  if (i % 2 === 0) {
    sum += i;
    count++;
  }
}
console.log(`Sum of even numbers: ${sum} `, `Number of even numbers: ${count}`);

//2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
let number = 25;

if (typeof number === 'number' && number > 0 && number === number) {
  let result = true;
  for (i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      console.log('Number is not prime');
      result = false;
      break;
    }
  }
  if (result) {
    console.log('Number is prime');
  }
}

//3.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
let number = 22;

function selectionSqr(number) {
  if (typeof number === 'number' && number > 0 && number === number) {
    let sqrNumber = 0;
    for (i = 1; i < number; i++) {
      if (i * i < number) {
        sqrNumber = i;
      }
      console.log(
        `Integer root of a natural number(Selection method)  ${sqrNumber}`
      );
    }
  }
}
selectionSqr(number);
/*
function binarySort(number) {
  if (number == 0 || number == 1) {
    return number;
  }
  if (typeof number === 'number' && number > 0 && number === number) {
    let firstNum = 1;
    let lastNum = number;
    let value = 0;
    while (firstNum < lastNum) {
      let medNum = Math.round(lastNum / 2);
      if (medNum * medNum > number) {
        lastNum = medNum;
        console.log(lastNum);
      } else if (medNum * medNum < number) {
        value = medNum;
        console.log(value);
      } else {
        console.log(value);
      }
    }
    console.log(value);
  }
}
binarySort(21);

let result = Math.sqrt(number);
console.log('Result: ' + result);
*/
//4.Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function factorial(num) {
  return num != 1 ? num * factorial(num - 1) : 1;
}
factorial(7);

//5.Посчитать сумму цифр заданного числа
function getNumbersSum(num) {
  return num
    .toString()
    .split('')
    .reduce(function (a, b) {
      return +a + +b;
    });
}
getNumbersSum(2021);

//6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function mirrorNum(num) {
  return +num.toString().split('').reverse().join('');
}
mirrorNum(123);
