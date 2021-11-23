let length = 0;
let head = null;
let node;
let currentNode;
let previousNode;
let index;
let currentIndex;

function LinkedList() {

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    currentNode = head;
    previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    currentNode = head;
    index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function (index) {
    currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    node = new Node(element);

    currentNode = head;
    previousNode;
    currentIndex = 0;

    if (index > length) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    currentNode = head;
    previousNode;
    currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };

  this.viewAll = function(){
    let lengthLL = linkedList.size();
    let itemArr = [];
    for(i=0; i < lengthLL; i++){
      itemArr.push(linkedList.elementAt(i));
    }
    return itemArr;
  };

  this.removeLast = function (){
    let lengthLL = linkedList.size();
    linkedList.removeAt(lengthLL-1);
  }

}
const linkedList = new LinkedList();

/*
linkedList.add('walk with the cat');
linkedList.add('give a cat to drink');
linkedList.add('play with the cat');
console.log(linkedList.size());
console.log(linkedList.elementAt(0));
console.log(linkedList.elementAt(1));
console.log(linkedList.elementAt(2));
console.log(linkedList.elementAt(3));
console.log(linkedList.elementAt(4));
console.log(linkedList.removeAt(3));
console.log(linkedList.elementAt(3));
console.log(linkedList.indexOf('play with the cat'));
console.log(linkedList.size());
*/


