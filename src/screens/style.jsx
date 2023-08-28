import { StyleSheet, Dimensions } from "react-native";
const font_weight = 500
export default StyleSheet.create({
    defaultText: {
        color: '#000000', // set the default text color to black
    },
    menu: {
        flexDirection: 'row',
        backgroundColor: '#00558F'
    },
    text_color: {
        color: 'black'
    },
    button: {
        width: Dimensions.get('window').width / 3,
        height: 50,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    button_default: {
        height: 50,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    button_menu: {
        marginTop: 13,
        marginLeft: 20,
        width: (Dimensions.get('window').width - 80) / 3 >= 200 ? 100 : (Dimensions.get('window').width - 80) / 3,
        height: ((Dimensions.get('window').width - 80) / 3 >= 200 ? 100 : (Dimensions.get('window').width - 80) / 3) * 1.2,
        backgroundColor: '#ffffff',
        marginBottom: 5
    },
    button_menu_tou: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: (Dimensions.get('window').width - 80) / 3 >= 200 ? 100 : (Dimensions.get('window').width - 80) / 3,
        backgroundColor: '#00558F',
        width: (Dimensions.get('window').width - 80) / 3 >= 200 ? 100 : (Dimensions.get('window').width - 80) / 3,
        borderRadius: 20,
    },
    button_menu_text: {
        fontSize: Dimensions.get('window').height > 900 ? 16 : 13.5,
        color: '#011638',
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 400
    },
    button_login: {
        backgroundColor: '#00558F',
        marginHorizontal: 5,
        marginTop: 20,
        alignItems: 'center',
        padding: 10,
        borderRadius: 20
    }
    ,
    container: {
        height: 60,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 10,
    },
    text_top: {
        textAlign: 'center',
        padding: 5,
        marginTop: 5,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ffffff',
        fontSize: 13,
        marginLeft: 5,
        marginRight: 5,
        width: '100%',
    },
    textAlignCenter: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        backgroundColor: '#ffffff',
        color: '#000000',
        paddingVertical: 5,
        paddingLeft: 10,
        borderRadius: 10
    },
    Text2_row: {
        flexDirection: 'row',
        padding: 10,
        fontSize: 14,
        fontWeight: '350',
        borderColor: '#DDDFE1',
        borderBottomWidth: 1,
        alignItems: 'center',
        color: '#000000'
    },
    Text_Label: {
        width: '40%',
        paddingLeft: 10,
        color: '#000000'
    }
    ,
    Textinput2_row: {
        flexDirection: 'row',
        fontSize: 14,
        borderColor: '#DDDFE1',
        borderBottomWidth: 1,
        alignItems: 'center',
        color: '#000000',
        marginHorizontal: 10
    },
    view_textin_borderwidth: {
        fontSize: 14,
        borderColor: '#DDDFE1',
        borderBottomWidth: 1,
        color: '#000000',
        marginHorizontal: 20
    }
    ,
    border_input: {
        backgroundColor: '#ffffff',
        borderWidth: 1.5,
        marginLeft: 5,
        marginRight: 5,
        borderColor: '#00558F',
        borderRadius: 10
    }
    ,
    TouchableOpacity: {
        backgroundColor: '#ffffff',
        color: 'blue',
        fontSize: 20,
        marginTop: 8,
        marginLeft: Dimensions.get('window').width / 49,
        height: Dimensions.get('window').width / 7,
        width: Dimensions.get('window').width / 7,
    },
    image: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height < Dimensions.get('window').width ? 0 : 20,
        // backgroundColor: '#AF7817',
    },
    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        //width: Dimensions.get('window').width,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
    ,
    modalView: {
        //margin: 20,
        backgroundColor: '#6D7B8D',
        padding: 0,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 400,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderRadius: 20
        //width: Dimensions.get('window').width,
    },
    buttonOpen: {
        backgroundColor: 'none',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'black',
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',

    },
    modalText: {
        marginBottom: 17,
        textAlign: 'center',
    },
    text_model: {
        width: '93%',
        marginTop: 10,
        backgroundColor: '#ffffff',
        padding: 14, fontSize: 17,
        borderRadius: 5,
        borderColor: '#DDDFE1',
        borderWidth: 1
    },
    button_bam: {
        margin: 5,
        width: 110,
        height: 125,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_box_shadow: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    button_tiente: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        marginRight: 10,
        marginBottom: 10
    }
    ,
    Toucha_ThongBao: {
        flexDirection: 'row',
        padding: 8,
        fontWeight: '350',
        borderColor: '#DDDFE1',
        borderBottomWidth: 1
    },
    text_lable40: {
        width: '40%',
        padding: 5,
        fontSize: 17
    },
    text_lable: {
        padding: 5,
        fontSize: 17
    },
    text_lable50: {
        width: '50%',
        padding: 5,
        fontSize: 17
    },
    text_lable60: {
        width: '60%',
        padding: 5,
        fontSize: 17
    },
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: '#00558F',
        height: 50,
        padding: 0
    },
    tou_order_function: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_setting: {
        marginLeft: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 400
    },
    text_title_setting_open: {
        marginLeft: 10,
        fontWeight: 300,
        fontSize: 28,
        borderRadius: 5,
        padding: 10,
        color: '#000000',
        marginBottom: 15
    },
    text_setting_setitng_detail: {
        marginLeft: 48,
        fontSize: 18,
        borderRadius: 5,
        padding: 6,
        color: '#000000',
        fontWeight: 500
    },
    img_in_tou_menu: {
        height: '65%',
        width: '65%',
        marginTop: 0,
    },
    search_container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    borderBottomDDDFE1:
    {
        borderBottomWidth: 1,
        borderColor: "#DDDFE1"
    },
    borderWidth_all_center_row: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    end: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    start: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    stepIndicatorContainer: {
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    componentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepComponent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});