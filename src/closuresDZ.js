function tickets(person) {
  if (person.length === 0) {
    return 'Array is empty';
  }
  if (Array.isArray(person)) {
    person = person.map((item) => +item);
    let bill_25 = 0;
    let bill_50 = 0;

    for (i = 0; i < person.length; i++) {
      switch (person[i]) {
        case 25:
          bill_25 += 25;
          break;
        case 50:
          if (bill_25 >= 25) {
            bill_25 -= 25;
            bill_50 += 50;
            break;
          }
        case 100:
          if (bill_50 >= 50 && bill_25 >= 25) {
            bill_50 -= 50;
            bill_25 -= 25;
            break;
          } else if (bill_25 >= 75) {
            bill_25 -= 75;
            break;
          }
        default:
          return 'NO. Vasya will not have enough money to give change';
      }
    }
    return 'Yes';
  }
}
tickets([25, 25, 50]);
tickets([25, 50, 100]);
tickets(['25', '25', '50']);
tickets(['25', '50', '100']);

for (i = 0; i < 5; i++) {}

function getSum(firstStr, secondStr) {
  if (typeof firstStr !== 'string' && typeof secondStr === 'string') {
    return secondStr;
  }
  if (typeof firstStr === 'string' && typeof secondStr !== 'string') {
    return firstStr;
  }
  if (typeof firstStr !== 'string' && typeof secondStr !== 'string') {
    return;
  }
  let firstArr = firstStr.split('');
  let secondArr = secondStr.split('');
  let maxArr = firstArr >= secondArr ? firstArr : secondArr;
  let minArr = firstArr <= secondArr ? firstArr : secondArr;
  maxArr.reverse();
  minArr.reverse();
  let thirdArr = [];
  thirdArr.length = maxArr.length;

  for (i = 0; i < maxArr.length; i++) {
    let result = Number(maxArr[i]) + (Number(minArr[i]) || 0) + (Number(thirdArr[i]) || 0);
    if (result >= 10) {
      thirdArr[i] = Number(result - 10);
      thirdArr[i + 1] = Number(Math.floor(result / 10));
    }
    if (result < 10) {
      thirdArr[i] = Number(result);
    }
  }
  return thirdArr.reverse().join('');
}
getSum('1111111111', '222222222222222222222');

let listOfPosts2 = [
  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
    ],
  },
  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Ivanov',
    comments: [
      {
        id: 1.1,
        comment: 'some comment1',
        title: 'title 1',
        author: 'Rimus',
      },
      {
        id: 1.2,
        comment: 'some comment2',
        title: 'title 2',
        author: 'Uncle',
      },
      {
        id: 1.3,
        comment: 'some comment3',
        title: 'title 3',
        author: 'Rimus',
      },
    ],
  },
  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus',
  },
  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle',
  },
];

function getQuntityPostsByAuthor(array, string) {
  if (Array.isArray(array) && typeof string === 'string') {
    let posts = 0;
    let comments = 0;
    array.forEach((item) => {
      if (item.author === string) {
        posts++;
      }
    });
    array.forEach((item) => {
      if (item.comments) {
        item.comments.forEach((item2) => {
          if (item2.author === string) {
            comments++;
          }
        });
      }
    });

    return `Posts: ${posts}, comments: ${comments}`;
  }
}

getQuntityPostsByAuthor(listOfPosts2, 'Rimus');

function complexFunction(arg1, arg2) {
  return arg1 + ' ' + arg2;
}
function cashe() {
  let cache = [];
  let result = [];
  return (...args) => {
    if (args[0] === undefined || args[1] === undefined) {
      return;
    }
    let firstArg = args[0];
    let secondArg = args[1];
    if (cache.includes(firstArg) && cache.includes(secondArg)) {
      console.log('Value from cache');
      let item = firstArg + ' ' + secondArg;
      let index = result.indexOf(item);
      return result[index];
    } else {
      console.log('New value');
      cache.push(firstArg);
      cache.push(secondArg);
      result.push(complexFunction(firstArg, secondArg));
      let item = firstArg + ' ' + secondArg;
      let index = result.indexOf(item);
      return result[index];
    }
  };
}
const cashedFunc = cashe();

cashedFunc('foo', 'bar');
cashedFunc('foo', 'bar');
cashedFunc('foo', 'baz');
