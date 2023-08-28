import { ADD_TODO, REMOVE_TODO, TAKE_PHOTO } from '../actions/todoActions';
import { SET_PHOTO } from '../actions/todoActions';
const initialState = {
    todos: []
};
const initialState1 =
{
    photo: "1"
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};
export const photoReducer = (state = initialState1, action) => {
    switch (action.type) {
        case TAKE_PHOTO:
            return {
                ...state,
                photo: state.photo,
            };
        case SET_PHOTO:
            return {
                ...state,
                photo: action.payload
            }
        default:
            return state;
    }
};
export const takePhoto = async () => {
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
export const recognizeText = async (imageUri) => {
    try {
        const result = await TextRecognition.recognize(imageUri);
        console.log(result)

    } catch (err) {
        console.error(err);
    }
}
