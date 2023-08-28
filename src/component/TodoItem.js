import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todoActions';

const TodoItem = ({ todo, removeTodo }) => {
    const handleRemoveTodo = () => {
        removeTodo(todo.id);
    };

    return (
        <TouchableOpacity onPress={handleRemoveTodo}>
            <View>
                <Text>{todo.task}</Text>
            </View>
        </TouchableOpacity>
    );
};

const mapDispatchToProps = {
    removeTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
