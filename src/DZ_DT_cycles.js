//ЦИКЛЫ
//1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumNumbers(num) {
  let sum = 0;
  let count = 0;
  for (i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
      count++;
    }
  }
  return `Sum of even numbers: ${sum}, Number of even numbers: ${count}`;
}
sumNumbers(99);

//2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function numberIsPrime(number) {
  if (typeof number === 'number' && number > 0 && number === number) {
    for (i = 2; i < number - 1; i++) {
      if (number % i === 0) {
        return 'Number is not prime';
      }
    }
    return 'Number is prime';
  }
}
numberIsPrime(25);

//3.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function selectionSqr(number) {
  if (typeof number === 'number' && number > 0 && number === number) {
    let sqrNumber = 0;
    for (i = 1; i < number; i++) {
      if (i * i < number) {
        sqrNumber = i;
      }
    }
    return `Integer root of a natural number(Selection method) ${sqrNumber}`;
  }
}
selectionSqr(22);

function benarySqrt(number) {
  if (number == 0 || number == 1) return number;
  if (typeof number === 'number' && number > 0 && number === number) {
    let firstNum = 1;
    let lastNum = number;
    let saved = 0;
    while (true) {
      let medNum = Math.floor((firstNum + lastNum) / 2);
      switch (true) {
        case saved === medNum:
          return medNum;
        case number === medNum * medNum:
          return medNum;
        case number < medNum * medNum:
          lastNum = medNum;
          break;
        default: {
          firstNum = medNum;
          saved = medNum;
        }
      }
    }
  }
}
benarySqrt(22);

//4.Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function factorial(num) {
  if (typeof num === 'number' && num > 0 && num === num) {
    let result = 1;
    for (i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

factorial(7);

//5.1. Сумма чисел - если от 1 до "заданного":
function sumNum(num) {
  if (typeof num === 'number' && num > 0 && num === num) {
    let result = 1;
    for (i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  }
}
sumNum(5);

//5.1. Сумма чисел - если это сумма составных чисел:
function sumNum2(num) {
  if (typeof num === 'number' && num > 0 && num === num) {
    let splitArr = num.toString().split('');
    let result = 0;
    for (i = 0; i < splitArr.length; i++) {
      result += Number(splitArr[i]);
    }
    return result;
  }
}
sumNum2(22);

//6.Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function mirrorNum(num) {
  if (typeof num === 'number' && num > 0 && num === num) {
    let splitArr = num.toString().split('');
    let mirArr = [];
    for (i = splitArr.length - 1; i >= 0; i--) {
      mirArr.push(splitArr[i]);
    }
    let resultStr = mirArr.join('');
    return +resultStr;
  }
}
mirrorNum(123);
