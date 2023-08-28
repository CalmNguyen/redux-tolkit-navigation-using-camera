import React from 'react';
import { View, FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (<TodoItem todo={item} />)
                }
                }
            />
        </View>
    );
};

export default TodoList;
