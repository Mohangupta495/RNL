import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Icon from 'react-native-feather';

// Import your screen components here
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/DetailsScreen';
import SettingScreen from '../screens/SettingScreen';
import { useTheme } from 'react-native-paper';
import Counter from '../testing/Counter';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createMaterialBottomTabNavigator();

const NavigationStack = () => {
  const theme = useTheme();
theme.colors.secondaryContainer = "transperent"
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="blue"
        inactiveColor="gray"
        barStyle={{ backgroundColor: '#fff' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color }) => (
              <Icon.Navigation width={26} height={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Counter"
          component={Counter}
          options={{
            tabBarLabel: 'Counter',
            tabBarIcon: ({ color }) => (
              <Icon.CornerUpRight width={26} height={26} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Icon.Settings width={26} height={26} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default NavigationStack;
