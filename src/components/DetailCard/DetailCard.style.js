import { StyleSheet, Dimensions } from 'react-native';

const widthOfScreen = Dimensions.get('screen').width;

export default StyleSheet.create({
    container:{},
    image:{
        maxWidth: widthOfScreen,
        height: 300,
    },
    text_container:{
        backgroundColor: 'whitesmoke',
    },
    title:{
        fontSize: 30,
        color: 'darkred',
        fontWeight: 'bold',
    },
    area:{
        fontSize: 22,
        color: 'darkred',
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    desc:{
        marginTop: 10,
        color: 'black',
        fontSize: 14,
        marginBottom: 10,
    }
})