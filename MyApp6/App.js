import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePage from './Components/HomePage.js';
import CheckOutPage from './Components/CheckOutPage.js';
import * as React from 'react';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={() => null}
      screenOptions={{ swipeEnabled: true,}}
    >
      <Tab.Screen name="HomeScreen" component={HomePage} />
      <Tab.Screen name="CartScreen" component={CheckOutPage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (   

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>  

  );
}








