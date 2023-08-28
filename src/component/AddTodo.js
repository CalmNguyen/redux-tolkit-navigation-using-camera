import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodo = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            addTodo({
                id: new Date().getTime(), // For simplicity, use timestamp as the ID
                task: task,
            });
            setTask('');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter your task..."
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add" onPress={handleAddTodo} />
        </View>
    );
};
const mapStateToProps = (state) => ({
    todos: state.todo.todos,
});
const mapDispatchToProps = {
    addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
