import * as React from 'react';
import { useCallback, useEffect, useState, memo, useRoute, createContext } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Alert, ToastAndroid, Dimensions } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import TextRecognition from 'react-native-text-recognition';
export default function Screen1({ navigation }) {
    const [photo, set_photo] = useState("")
    const takePhoto = async () => {
        try {
            console.log('vô')
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'Camera Permission',
                            message: 'App needs access to your camera.',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        },
                    );
                    // console.log(granted, PermissionsAndroid.RESULTS.GRANTED)
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        launchImageLibrary({}, response => {
                            if (response.didCancel) {
                                // console.log('User cancelled image picker');
                            } else if (response.error) {
                                console.log('ImagePicker Error: ', response.error);
                            } else {
                                recognizeText(response.assets[0].uri)
                                set_photo(response.assets[0].uri)
                            }
                        });
                    } else {
                        console.log('Camera permission denied');
                    }
                } catch (error) {
                    console.warn(error);
                }
            } else {
                try {
                    const result = await request(PERMISSIONS.IOS.CAMERA);
                    if (result === 'granted') {
                        launchImageLibrary({}, response => {
                            if (response.didCancel) {
                                // console.log('User cancelled image picker');
                            } else if (response.error) {
                                console.log('ImagePicker Error: ', response.error);
                            } else {
                                // console.log(response)
                                recognizeText(response.assets[0].uri)
                                set_photo(response.assets[0].uri)
                            }
                        });
                    } else {
                        console.log('Camera permission denied');
                    }
                } catch (error) {
                    console.warn(error);
                }
            }
        }
        catch (err) {

        }
    };
    const recognizeText = async (imageUri) => {
        try {
            const result = await TextRecognition.recognize(imageUri);
            console.log(result)

        } catch (err) {
            console.error(err);
        }
    }
    return (
        <View>
            <TouchableOpacity style={{ flex: 2 }} onPress={() => navigation.navigate('Screen3')}>
                <Text>
                    Chuyển sang màn hình 3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async () => await takePhoto()} >
                <Text>Take photo</Text>
            </TouchableOpacity>
        </View>
    )
}