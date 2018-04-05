'use strict';

const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null; // head = first node
  }

  insert(item) {
    if (this.head === null) {
      this.head = new _Node(item, this.head); // _Node (data, null)
    // Create a new Node object, insert value & this.head is null since its the first node in the list
    } else {
      let tempNode = this.head; // assign TempNode to first node in list
      while(tempNode.next !== null) { // iterate thru each node til we reach the end of list
        tempNode = tempNode.next; // reassign tempNode to a .next property
      }
      tempNode.next = new _Node(item, null); // instead of the last item on the list pointing to NULL, it points to the new item & the new tempNode points to NULL
    }
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(oldItem, newItem) {

    if (this.head === null) {
      throw new Error('The list is empty');
    }

    if (this.head.value === oldItem) {
      this.insertFirst(newItem);
      return;
    }

    let prevNode = this.head;
    let currNode = this.head;

    while(currNode) {
      prevNode = currNode;
      currNode = currNode.next;

      if (currNode.value === oldItem) {
        prevNode.next = new _Node(newItem, prevNode.next);
        return;
      }
    }
    throw new Error(`Item ${oldItem} does not exist`);
  }

  find(item) {
    let currNode = this.head; // assign currNode to beginning of list
    if (!this.head) {
      return null; // if the list is empty, return null
    }
    while(currNode.value !== item) {
      // while we iterate through the list...
      if (currNode.next === null) {
        return null; // return null if we reach the end of the list and the item isn't there
      } else {
        currNode = currNode.next; // keep looking and re-assigning currNode as we iterate thru the list
      }
    }
    return currNode; // return currNode when the item is found
  }

  remove(item) {
    if(!this.head) {
      return null; // if the list is empty, return null
    }

    if (this.head === item) {
      // if the node we're removing is the head, make the next node the new head
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      // while currNode is null && value isn't the same as item we're looking for...
      previousNode = currNode; // previous node becomes currNode
      currNode = currNode.next; // then currNode points to next node
    }

    if (currNode === null) {
      // if we never found the item, send user feedback
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next; // otherwise, overwrite the previous node to exclude it from the list
  }

  prettyPrint() {
    let current = this.head;
    let pretty = '';
    while (current) {
      pretty += `=> ${current.value} `;
      current = current.next;
    }
    console.log(pretty);
  }
}

module.exports = LinkedList;