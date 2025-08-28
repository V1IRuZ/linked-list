class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if(!this.head) {
      return this.head = newNode;
    }

    let tmp = this.head;
    while (tmp.nextNode) {
      tmp = tmp.nextNode;
    }

    tmp.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      return this.head = newNode;
    }

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let total = 0;
    let tmp = this.head;

    while(tmp) {
      total++;
      tmp = tmp.nextNode;
    }

    return total;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (!this.head) {
      return null;
    }

    let tmp = this.head;

    while(tmp.nextNode) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }
}

class Node {
  constructor(data = null, nextNode = null) {
    this.data = data; 
    this.nextNode = nextNode;
  }
}


const list = new LinkedList()
list.append("dog");
list.append("cat");
list.append("parrot");
console.log(list.getTail());