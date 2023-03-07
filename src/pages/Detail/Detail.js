import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import DetailCard from '../../components/DetailCard';

const Detail = ({route}) => {

    const [detail, setDetail] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const {data} = await axios.get(Config.API_URL + 'lookup.php?i=' + route.params.idMeal);
        setDetail(data);
    }

    /* const goToYouTube = (url) => {
        try {
            Linking.openURL(url);
        } catch {
            Alert.alert('Video Bulunamadı gardaş!');
        }
    }; */

    const renderDetail = ({item}) => <DetailCard listDetail={item}/>


    return(
        <View>
            <FlatList data={detail.meals} renderItem={renderDetail} keyExtractor={item => item.idMeal}/>
        </View>
    )
}

export default Detail;