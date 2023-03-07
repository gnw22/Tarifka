import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import MealsCard from '../../components/MealsCard';
import styles from './Meals.style';

const Meals = ({route, navigation}) => {

    const {strCategory} = route.params;

    const [meal, setMeal] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get(Config.API_URL + 'filter.php?c=' + strCategory);
        setMeal(data);
    }

    const renderMeals = ({item}) => <MealsCard listMeal={item} onSelect={() => handleMealSelect(item.idMeal)}/>

    const handleMealSelect = idMeal => {
        navigation.navigate('DetailPage', {idMeal})
    }

    return(
        <View style={styles.container}>
            <FlatList data={meal.meals} renderItem={renderMeals} />
        </View>
    )
}

export default Meals;