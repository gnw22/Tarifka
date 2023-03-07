import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';


const Stack = createNativeStackNavigator();

function Router(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='CategoriesPage' component={Categories} options={
                {headerTitle:'Categories', 
                headerTitleStyle: {color: 'orange',fontSize:25},
                headerTitleAlign: 'center'
              }}/>
              <Stack.Screen name='MealsPage' component={Meals} options={
                {headerTitle:'Meals',
                headerTitleStyle: {color: 'orange', fontSize:25},
                headerTitleAlign: 'center'
                }}/>
              <Stack.Screen name='DetailPage' component={Detail} options={{
                headerTitle:'Detail', headerTitleStyle: {color:'orange', fontSize: 25,},
                headerTitleAlign: 'center',
              }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Router;


