import { StyleSheet, Dimensions } from 'react-native';

const witdhOfScreen = Dimensions.get('screen').width;
const heightOfScreen = Dimensions.get('screen').height;

export default StyleSheet.create({
    body_container:{
        flexDirection: 'column',
        margin: 10,
        flex: 1,
    },
    image:{
        maxWidth: witdhOfScreen,
        height: heightOfScreen / 4,
        borderRadius: 10,
    },
    title_container:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.6,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
})