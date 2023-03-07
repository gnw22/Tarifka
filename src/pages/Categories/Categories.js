import React, {useState, useEffect} from 'react';
import { View, FlatList } from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import CategoriesCard from '../../components/CategoriesCard';
import styles from './Categories.style';

const Categories = ({navigation}) => {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const {data} = await axios.get(Config.API_URL + 'categories.php');
        setCatalog(data);
    }

    const handleCategorieSelect = strCategory => {
        navigation.navigate('MealsPage', {strCategory}) //burada kaldın
    }

    const renderCatalog = ({item}) => <CategoriesCard listCat={item} onSelect={() => handleCategorieSelect(item.strCategory)}/>;

    return(
        <View style={styles.container}>
            <FlatList data={catalog.categories} renderItem={renderCatalog} />
        </View>
    )
}
export default Categories;