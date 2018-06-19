export const ADD_TASK = 'ADD_TASK';

export default function addTask(item) {
  return ({
    type: ADD_TASK,
    payload: item,
  });
}
