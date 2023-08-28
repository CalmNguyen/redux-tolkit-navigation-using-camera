import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import TodoList from '../component/TodoList';
import AddTodo from '../component/AddTodo';
import TakePhoto from '../component/TakePhoto';
import { TouchableOpacity, Text } from 'react-native-gesture-handler';
import { SET_PHOTO } from '../actions/constants';

const HomeScreen = ({ todos, photo }) => {
    return (
        <View>
            <View>
                <TakePhoto photo={photo} />
                <AddTodo />
                <TodoList todos={todos} />
            </View>

        </View>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todo.todos,
    photo: state.photo.photo
});

export default connect(mapStateToProps)(HomeScreen);
