import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { setPhoto } from '../actions/todoActions';
import { connect } from 'react-redux';

function TakePhoto({ navigation, photo, setPhoto }) {
    return (
        <View>
            <TouchableOpacity style={{ flex: 2 }}>
                <Text>Chuyển sang màn hình 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log(photo)}>
                <Text>In photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPhoto(photo + 'a')}>
                <Text>Set photo</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => ({
    photo: state.photo.photo,
});

const mapDispatchToProps = {
    setPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(TakePhoto);
