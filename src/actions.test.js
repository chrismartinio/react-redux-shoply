// import { add, remove } from './actions.js';

const { add, remove } = require('./actions.js');

test('return correct data', () => {
  let resp = add('stuff', 1);
  expect(resp).toEqual({ type: 'ADD', payload: 'stuff', id: 1})
});

test('remove correct response', () => {
  let resp = remove(1);
  expect(resp).toEqual({ type: 'REMOVE', id: 1 })
});
