import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const StackNavigator = createStackNavigator({
    HomeList:{
        screen:HomeList
    },
    HomeProducts:{
        screen:HomeProducts
    }
}, {
    defaultNavigationOptions:{
        title:'Pé de Fava',
        headerTintColor:'#ffffff',
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#ffa500',
            height:100
        },
        headerTitleStyle:{
            fontSize:26,
            fontWeight:'bold'
        }
    }
});

export default createAppContainer(StackNavigator);