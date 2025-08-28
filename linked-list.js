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
list.prepend("parrot");
console.log(list.head);