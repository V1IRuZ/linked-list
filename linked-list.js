export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if(!this.head) {
      return this.head = newNode;
    }

    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
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
    let currentNode = this.head;

    while(currentNode) {
      total++;
      currentNode = currentNode.nextNode;
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

    let currentNode = this.head;

    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    if(!this.head || index < 0 || index >= this.size()) {
      return null;
    }
    
    let nodeIndex = 0;
    let currentNode = this.head;

    while(nodeIndex < index) {
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }

    return currentNode;
  }

  pop() {
    if(!this.head) {
      return null;
    }

    if (!this.head.nextNode) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    }

    let currentNode = this.head;
    let previousNode = null;

    while(currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;
    return currentNode;
  }

  contains(value) {
    if(!this.head) {
      return false;
    }

    let currentNode = this.head;

    while(currentNode) {
      if(currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let nodeIndex = 0;
    let currentNode = this.head;
    
    while (currentNode) {
      if (currentNode.data === value) {
        return nodeIndex;
      }

      nodeIndex++;
      currentNode = currentNode.nextNode;
    }

    return null;
  }

  toString() {
    if (!this.head) {
      return "null";
    }

    let currentNode = this.head;
    let output = "";

    while (currentNode) {
      output += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.nextNode;
    }

    output += "null";
    return output;
  }

  insertAt(value, index) {
    const newNode = new Node(value);

    // Insert as a head node
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let nodeIndex = 0;

    while(currentNode) {
      if (index === nodeIndex) {
        newNode.nextNode = currentNode;
        previousNode.nextNode = newNode;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }

    // Insert as a tail node
    if (index === nodeIndex) {
      return previousNode.nextNode = newNode;
    }

    return console.log("Index out of range");
  }
}

class Node {
  constructor(data = null, nextNode = null) {
    this.data = data; 
    this.nextNode = nextNode;
  }
}