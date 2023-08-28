import * as React from 'react';
import { useCallback, useEffect, useState, memo, useRoute, createContext } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert, ToastAndroid, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeTabNavigator } from '@react-navigation/native-Tab';
import AsyncStorage from '@react-native-community/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const font_size = Dimensions.get('window').height > 900 ? 18 : 14
import Ionicons from 'react-native-vector-icons/Ionicons';
export const MyContext = createContext(null);
import json_language from './json_language.json'
import Screen1 from './Screen1'
import A from '../App'
function Screen2({ navigation }) {
    useEffect(() => {
        console.log('screen2')
    }, [])
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
            <Text>
                Chuyển sang màn hình 3
            </Text>
        </TouchableOpacity>
    )
}
function Screen3({ navigation }) {
    useEffect(() => {
        console.log('screen3')
    }, [])
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
            <Text>
                Cin ahfo màn hình 1
            </Text>
        </TouchableOpacity>
    )
}
// const Stack = createStackNavigator();
function HomeScreen() {
    return (
        <Stack.Navigator initialRouteName="Sreen1"
            options={{ headerShown: false }}
        >
            <Stack.Screen name="Screen1" component={A} options={{ headerShown: true }} />
            <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function BottomTab() {

    const [language, set_language] = useState('Vietnamese');
    AsyncStorage.getItem("language")
        .then(async (data) => {
            const myData = JSON.parse(data);
            if (myData) {
                await set_language(myData)
            }
            else await set_language('Vietnamese')
        })
        .catch((err) => console.log(err))
    const [status_module_smart_sim_, set_status_module_smart_sim_] = useState()
    return (
        <MyContext.Provider value={{ language, set_language, status_module_smart_sim_ }}>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={{

                    tabBarStyle: [styles.tabBarStyle, { backgroundColor: '#ffffff', height: Dimensions.get('window').height > 480 && Dimensions.get('window').width > 480 ? 65 : Platform.OS == 'ios' ? 75 : 55 }], tabBarShowLabel: false,
                }}
            >
                <Tab.Screen options={({ route }) =>
                ({
                    tabBarVisible: route.state && route.state.index === 0, // Ẩn thanh bottom tabs khi chuyển đến Screen2
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.button_default, { textAlign: 'center', width: Dimensions.get('window').width / 3, borderColor: '#00558F', borderBottomWidth: focused ? 2 : 0 }]}>
                                <Entypo name="home" size={23} style={{ color: focused ? '#00558F' : '#696969' }} />
                                <Text style={{ fontSize: font_size, color: focused ? '#00558F' : '#696969' }}>Home</Text>
                            </View>
                        )
                    }
                })}
                    name="Home" component={Screen2} />
                <Tab.Screen tabBarActiveTintColor={'blue'} options={({ route }) =>
                ({
                    tabBarVisible: false, // Ẩn thanh bottom tabs khi chuyển đến Screen2
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.button_default, { textAlign: 'center', width: Dimensions.get('window').width / 3, borderColor: '#00558F', borderBottomWidth: focused ? 2 : 0 }]}>
                                <AntDesign name="sync" size={23} style={{ color: focused ? '#00558F' : '#696969' }} />
                                <Text style={{ fontSize: font_size, color: focused ? '#00558F' : '#696969' }}>Sync</Text>
                            </View>
                        )
                    }
                })} name="Sync" component={HomeScreen}
                />
                {/* <Tab.Screen options={({ route }) =>
                ({
                    tabBarVisible: route.state && route.state.index === 0, // Ẩn thanh bottom tabs khi chuyển đến Screen2
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={[styles.button_default, { textAlign: 'center', width: Dimensions.get('window').width / 3, borderColor: '#00558F', borderBottomWidth: focused ? 2 : 0 }]}>
                                <Ionicons name="md-notifications-sharp" size={23} style={{ color: focused ? '#00558F' : '#696969' }} />

                                <Text style={{ fontSize: font_size, color: focused ? '#00558F' : '#696969' }}> {json_language['Thông báo'][language]}</Text>
                            </View>)
                    }
                })} name="Notification" component={Notification} /> */}

            </Tab.Navigator>
        </MyContext.Provider>)
}
function App() {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    );
}

export default App;