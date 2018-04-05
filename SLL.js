'use strict';

const LinkedList = require('./linked-list');

const main = (function () {

  let list = new LinkedList();
  list.insertFirst('Apollo');
  console.log(list);
  list.insertLast('Boomer');
  list.insertLast('Helo');
  list.insertLast('Husker');
  list.insertLast('Starbuck');
  console.log(list);

})();
