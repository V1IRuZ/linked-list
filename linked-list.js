class Node {
  constructor(data = null) {
    this.data = data; 
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if(!this.headNode) {
      return this.headNode = newNode;
    }

    let currentNode = this.headNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      return this.headNode = newNode;
    }

    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let total = 0;
    let currentNode = this.headNode;

    while(currentNode) {
      total++;
      currentNode = currentNode.nextNode;
    }

    return total;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) {
      return null;
    }

    let currentNode = this.headNode;

    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    if(!this.headNode) {
      return null;
    }
    
    let nodeIndex = 0;
    let currentNode = this.headNode;

    while(currentNode) {
      if (index === nodeIndex) {
        return currentNode;
      }

      currentNode = currentNode.nextNode;
      nodeIndex++;
    }

    console.log("Index out of range");
  }

  pop() {
    if(!this.headNode) {
      return null;
    }

    if (!this.headNode.nextNode) {
      const poppedNode = this.headNode;
      this.headNode = null;
      return poppedNode;
    }

    let currentNode = this.headNode;
    let previousNode = null;

    while(currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    previousNode.nextNode = null;
    return currentNode;
  }

  contains(value) {
    if(!this.headNode) {
      return false;
    }

    let currentNode = this.headNode;

    while(currentNode) {
      if(currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    if (!this.headNode) {
      return null;
    }

    let nodeIndex = 0;
    let currentNode = this.headNode;
    
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
    if (!this.headNode) {
      return "null";
    }

    let currentNode = this.headNode;
    let output = "";

    while (currentNode) {
      output += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.nextNode;
    }

    output += "null";
    return output;
  }

  insertAt(value, index) {
    if(!this.headNode) {
      return null;
    }

    const newNode = new Node(value);

    // Insert as a head node
    if (index === 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
      return;
    }

    let currentNode = this.headNode;
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

  removeAt(index) {
    if (!this.headNode) {
      return null;
    }

    if (index === 0) {
      const removedNode = this.headNode;
      this.headNode = this.headNode.nextNode;
      return removedNode;
    }

    let currentNode = this.headNode;
    let previousNode = null;
    let nodeIndex = 0;

    while (currentNode) {
      if (nodeIndex === index) {
         previousNode.nextNode = currentNode.nextNode;
         return currentNode;
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }

    console.log("Index out of range");
  }
}