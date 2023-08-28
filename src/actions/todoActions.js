// Action Types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TAKE_PHOTO = 'TAKE_PHOTO'
export const SET_PHOTO = 'SET_PHOTO'
// Action Creators
export const addTodo = (task) => ({
    type: ADD_TODO,
    payload: task,
});

export const removeTodo = (taskId) => ({
    type: REMOVE_TODO,
    payload: taskId,
});
export const takePhoto = () => ({
    type: TAKE_PHOTO,
    payload: null
})
export const setPhoto = (photo) => ({
    type: SET_PHOTO,
    payload: photo
})