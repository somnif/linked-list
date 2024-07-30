import Node from "./Node.js";

export default class LinkedList {
  constructor(array = []) {
    this.rootNode = null;
    this.tailNode = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.rootNode) {
      this.rootNode = newNode;
    }
    if (this.tailNode) {
      this.tailNode.nextNode = newNode;
    }
    this.tailNode = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value, this.rootNode);
    this.rootNode = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.rootNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    if (!index > 0 || !Number.isInteger(index)) {
      return null;
    }
    if (index > this.length + 1) {
      return "No such index.";
    }
    const findNode = (currentNode = this.rootNode, iterator = index) => {
      if (iterator === 0) {
        return currentNode;
      } else {
        return findNode(currentNode.nextNode, iterator - 1);
      }
    };
    return findNode();
  }

  pop() {
    if (!this.rootNode) {
      return;
    }
    if (this.rootNode === this.tailNode) {
      this.head = null;
      this.tail = null;
    }

    let prevNode = this.rootNode;
    let currentNode = this.rootNode.nextNode;
    while (currentNode.nextNode) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    this.tailNode = prevNode;
    this.tailNode.nextNode = null;
    this.length--;
  }

  search(value) {
    let index = 0;
    let valueFound = false;

    const searchNodes = (node = this.rootNode) => {
      if (node.value === value) {
        valueFound = true;
      }
      while (index < this.length && !valueFound) {
        index++;
        searchNodes(node.nextNode);
      }
    };

    searchNodes();
    return { index, valueFound };
  }

  contains(value) {
    const searchResult = this.search(value);
    return searchResult.valueFound;
  }

  find(value) {
    const searchResult = this.search(value);
    return searchResult.valueFound ? searchResult.index : null;
  }

  toString() {
    const createString = (node = this.rootNode) => {
      if (node === null) {
        return "null";
      } else {
        return `( ${node.value} ) -> ` + createString(node.nextNode);
      }
    };
    return createString();
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    const prevNode = this.at(index - 1);
    const existingNode = prevNode.nextNode;

    prevNode.nextNode = newNode;
    newNode.nextNode = existingNode;
  }

  removeAt(index) {
    const prevNode = this.at(index - 1);
    const existingNode = prevNode.nextNode;
    prevNode.nextNode = existingNode.nextNode;
  }
}
