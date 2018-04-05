'use strict';

const LinkedList = require('./linked-list');

const main = (function () {

  let list = new LinkedList();
  list.insert('Apollo');
  // console.log(JSON.stringify(list));
  list.insert('Boomer');
  list.insert('Helo');
  list.insert('Husker');
  list.insert('Starbuck');
  console.log('before insert:', JSON.stringify(list));
  console.log('insertBefore:', list.insertBefore('ppp', 'Pizzaman'));
  console.log('after insert:', JSON.stringify(list));
})();
