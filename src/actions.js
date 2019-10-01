import { ADD, REMOVE } from './actionTypes';

export function add(data, id) {
  return {
    type: ADD,
    payload: data,
    id: id
  };
}

export function remove(id) {
  return {
    type: REMOVE, 
    id: id
  }
}