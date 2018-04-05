'use strict';

const _Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null; // head = first node
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

}