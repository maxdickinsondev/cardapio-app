import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const TabNavigator = createMaterialTopTabNavigator({
  Home:{
    screen:Home
  },
  Contato:{
    screen:Contato
  },
  Horarios:{
    screen:Horarios
  },
  Sobre:{
    screen:Sobre
  }
}, {
  tabBarOptions:{
    upperCaseLabel:false,
    showIcon:true,
    tabStyle:{
      backgroundColor:'#ffa500'
    }
  },
  tabBarPosition:'bottom'
});

export default createAppContainer(TabNavigator);

