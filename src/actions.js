import { ADD, REMOVE } from './actionTypes';

export function add(data) {
  return {
    type: ADD,
    payload: data
  };
}

export function remove() {
  return {
    type: REMOVE
  }
}