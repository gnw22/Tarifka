import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.style';

const CategoriesCard = ({listCat, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.body_container}>
        <Image style={styles.image} source={{uri: listCat.strCategoryThumb}} />
        <Text style={styles.title}>{listCat.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
