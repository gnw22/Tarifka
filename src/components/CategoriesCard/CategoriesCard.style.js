import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body_container:{
        height: 100,
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: 'grey',
        },
    image:{
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    title:{
        fontSize: 20,
        marginLeft: 10,
        color: 'black',
    },
})