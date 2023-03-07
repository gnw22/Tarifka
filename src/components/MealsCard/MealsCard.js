import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './MealsCard.style';

const MealsCard = ({listMeal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.body_container}>
        <Image style={styles.image} source={{uri: listMeal.strMealThumb}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>{listMeal.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard;
