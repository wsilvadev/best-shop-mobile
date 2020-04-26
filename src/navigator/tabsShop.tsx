import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Shirts from '../routes/Shirts';
import Shorts from '../routes/Shorts';
import Caps from '../routes/Caps';
import Shoes from '../routes/Shoes';
import Pants from '../routes/Pants';
const Tab = createMaterialTopTabNavigator();

const TabsCloses = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: '#526d74',
        labelStyle: {fontSize: 20, fontWeight: 'bold'},
        style: {backgroundColor: '#fff'},
      }}
    >
      <Tab.Screen name="Shirts" component={Shirts} />
      <Tab.Screen name="Shorts" component={Shorts} />
      <Tab.Screen name="Caps" component={Caps} />
      <Tab.Screen name="Shoes" component={Shoes} />
      <Tab.Screen name="Pants" component={Pants} />
    </Tab.Navigator>
  );
};

export default TabsCloses;
