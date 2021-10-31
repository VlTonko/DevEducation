//ОДНОМЕРНЫЕ МАССИВЫ
//1.Найти минимальный элемент массива:
const arr1 = [1, 3, 5, 2, 8, 1];
function minValue(arr) {
  let valueMin = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] === arr[i] && valueMin > arr[i]) {
      valueMin = arr[i];
    }
  }
  return valueMin;
}
minValue(arr1);

//2.Найти максимальный элемент массива:
const arr2 = [1, 3, 5, 2, 8];
function maxValue(arr) {
  let valueMax = arr[1];
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] === arr[i] && valueMax < arr[i]) {
      valueMax = arr[i];
    }
  }
  return valueMax;
}
maxValue(arr2);

//3.Найти индекс минимального элемента массива:
const arr3 = [1, 3, 5, 2, 8];
function minIndex(arr) {
  let valueMin = arr[0];
  let indexMin = 0;
  for (i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] === arr[i] && valueMin > arr[i]) {
      valueMin = arr[i];
      indexMin = i;
    }
  }
  return indexMin;
}
minIndex(arr3);

//4.Найти индекс максимального элемента массива:
const arr4 = [1, 3, 5, 2, 8];
function maxIndex(arr) {
  let valueMax = arr[1];
  let indexMax = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] === arr[i] && valueMax < arr[i]) {
      valueMax = arr[i];
      indexMax = i;
    }
  }
  return indexMax;
}
maxIndex(arr4);

//5.Посчитать сумму элементов массива с нечетными индексами:
const arr5 = [1, 3, 5, 2, 8];
function sumOdd(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] === arr[i] && arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
sumOdd(arr5);

//6.Сделать реверс массива (массив в обратном направлении):
let arr6 = [1, 3, 5, 2, 8];
function reverseArr(arr) {
  let mirArr = [];
  for (i = arr.length - 1; i >= 0; i--) {
    mirArr.push(arr[i]);
  }
  console.log(mirArr);
}
reverseArr(arr6);
//6 Методом реверс:
arr6 = arr6.reverse();
console.log(arr6);

//7.Посчитать количество нечетных элементов массива:
const arr7 = [1, 3, 5, 2, 8];
function numberOdd(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] === arr[i] && arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}
numberOdd(arr7);

//8.Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2:
const arr8 = [1, 2, 3, 4];

function reverseArr(arr) {
  let mediumValue = Math.floor(arr.length / 2) - 1;
  let arrOne = [];
  let arrTwo = [];
  let arrResult = [];

  for (i = 0; i <= mediumValue; i++) {
    arrOne.push(arr[i]);
  }
  for (i = mediumValue + 1; i < arr.length; i++) {
    arrTwo.push(arr[i]);
  }

  arrResult = arrTwo.concat(arrOne);
  console.log(arrResult);
}
reverseArr(arr8);

//9.Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

let arr = [100, 2, 3, 4, 9, 8, 45, 56, 7, 22, 1, 24, 36, 45, 2, 12, 22];

function bubbleSort(arr) {
  let operations = arr.length;
  for (i = 0; i < operations - 1; i++) {
    for (j = 0; j < operations - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
bubbleSort(arr);

function selectionSort(arr) {
  let operations = arr.length;
  for (i = 0; i < operations - 1; i++) {
    let minValue = i;
    for (j = i + 1; j < operations; j++) {
      if (arr[j] < arr[minValue]) {
        minValue = j;
      }
    }
    let temp = arr[minValue];
    arr[minValue] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
selectionSort(arr);

function insertionSort(arr) {
  let operations = arr.length;
  for (i = 0; i < operations; i++) {
    let ins = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > ins) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = ins;
  }
  console.log(arr);
}
insertionSort(arr);

//*10.Отсортировать массив (Quick, Merge, Shell, Heap)
