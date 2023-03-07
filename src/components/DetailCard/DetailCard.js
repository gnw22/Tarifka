import React from 'react';
import { View, Image, Text, Linking, Button } from 'react-native';

import styles from './DetailCard.style';

const DetailCard = ({listDetail}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: listDetail.strMealThumb}} />
            <View style={styles.text_container}>
                <Text style={styles.title}>{listDetail.strMeal}</Text>
                <Text style={styles.area}>{listDetail.strArea}</Text>
                <Text style={styles.desc}>{listDetail.strInstructions}</Text>
                <Button style={styles.button} color={'red'} title='Watch on YouTube' onPress={() => Linking.openURL(listDetail.strYoutube)} />
            </View>
        </View>
    )
}

export default DetailCard;