//ОДНОМЕРНЫЕ МАССИВЫ
//1.Найти минимальный элемент массива
const arr = [1, 3, 5, 2, 8, 1];
function minValue(arr) {
  let valueMin = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] === arr[i] && valueMin > arr[i]) {
      valueMin = arr[i];
    }
  }
  return valueMin;
}
minValue(arr);

//2.Найти максимальный элемент массива
const arr = [1, 3, 5, 2, 8];
function maxValue(arr) {
  let valueMax = arr[1];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] === arr[i] && valueMax < arr[i]) {
      valueMax = arr[i];
    }
  }
  return valueMax;
}
maxValue(arr);
//3.Найти индекс минимального элемента массива
const arr = [1, 3, 5, 2, 8];
function minIndex(arr) {
  let valueMin = arr[0];
  let indexMin = 0;
  for (i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] === arr[i] && valueMin > arr[i]) {
      valueMin = arr[i];
      indexMin = i;
    }
  }
  return indexMin;
}
minIndex(arr);
//4.Найти индекс максимального элемента массива
const arr = [1, 3, 5, 2, 8];
function maxIndex(arr) {
  let valueMax = arr[1];
  let indexMax = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] === arr[i] && valueMax < arr[i]) {
      valueMax = arr[i];
      indexMax = i;
    }
  }
  return indexMax;
}
maxIndex(arr);
//5.Посчитать сумму элементов массива с нечетными индексами
const arr = [1, 3, 5, 2, 8];
function sumOdd(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] === arr[i] && arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
sumOdd(arr);

//6.Сделать реверс массива (массив в обратном направлении)
var arr = [1, 3, 5, 2, 8];
arr = arr.reverse();

//7.Посчитать количество нечетных элементов массива
const arr = [1, 3, 5, 2, 8];
function numberOdd(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] === arr[i] && arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
numberOdd(arr);

//8.Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
const arr = [1, 3, 5, 2, 8];

function reverseArr(arr) {
  let mediumValue = Math.floor(arr.length / 2);
  let arrOne = [];
  let arrTwo = [];
  let arrResult = [];

  for (i = 0; i <= mediumValue; i++) {
    arrOne.push(arr[i]);
  }
  arrOne = arrOne.reverse();
  for (i = mediumValue + 1; i < arr.length; i++) {
    arrTwo.push(arr[i]);
  }
  arrTwo = arrTwo.reverse();

  arrResult = arrOne.concat(arrTwo);
  console.log(arrResult);
}
reverseArr(arr);

//9.Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
//*10.Отсортировать массив (Quick, Merge, Shell, Heap)
