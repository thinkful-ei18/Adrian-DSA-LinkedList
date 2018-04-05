'use strict';

const LinkedList = require('./single-linked-list');


function main () {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  console.log(SLL);
}

main();