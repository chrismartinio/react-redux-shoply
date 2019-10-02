// const rootReducer = require('./rootReducer')

import rootReducer from './rootReducer'
import { ADD } from './actionTypes';

console.log(rootReducer);

describe('reducer function', () => {
  it('is a function', function () {
    expect(typeof rootReducer).toEqual('function');
  })

  it('state stays', () => {
    // let action = { type: ADD, payload: 'item3', id: 1}
    let action = { type: ADD, payload: { item3: 'stuff3' }, id: 1 }
    let state = { items: [ { item1: 'item1' }, { item2: 'item2' } ]};
    let stateCopy = { ...state }
    let newState = rootReducer(state, action);
    expect(state).toEqual(stateCopy);
    expect(newState).toEqual({ items: [
      { item1: 'item1' }, 
      { item2: 'item2' }, 
      { item3: 'stuff3', id: 1 }
    ]})
    
  })
})