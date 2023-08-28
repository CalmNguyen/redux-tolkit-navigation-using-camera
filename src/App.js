import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import HomeScreen from './screens/HomeScreen';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
};

export default App;
