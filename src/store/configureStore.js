// configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer, photoReducer } from '../reducers/todoReducer';

const rootReducer = {
    todo: todoReducer,
    photo: photoReducer,
};

const store = () => configureStore({
    reducer: rootReducer,
});

export default store; // Đảm bảo bạn export như là một hàm, không phải là một object
