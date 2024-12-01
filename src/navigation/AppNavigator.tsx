import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsIcon from '../../assets/YummyMart.svg'; 
import HomeActive from '../../assets/HomeActive.svg'; 
import HomeInactive from '../../assets/HomeInactive.svg'; 
import CartActive from '../../assets/CartActive.svg'; 
import CartInactive from '../../assets/CartInactive.svg'; 
import AccountActive from '../../assets/AccountActive.svg'; 
import AccountInactive from '../../assets/AccountInactive.svg'; 

import LoginScreen from '../screens/Login/Login';
import OnboardingScreen from '../screens/Onboarding/Onboarding';
import HomeCustomer from '../screens/Home/HomeCustomer';
import HomeCategories from '../screens/Home/HomeCategories/HomeCategories';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#007aff',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#ffffff',
        paddingBottom: 10, // Add space below icons
        paddingTop: 15,    // Add space above icons
        borderTopLeftRadius: 20, // Rounded corners
        borderTopRightRadius: 20, 
        height: 70,        // Increase the height of the tab bar
        position: 'absolute', // Make it float above the screen
        borderTopWidth: 0, // Remove default border
      },
    }}
    >
      <Tab.Screen name="Home"
       component={HomeCustomer} 
       options={{
        tabBarIcon: ({ focused, color, size }) => (
          focused ? (
            <HomeActive width={24} height={24} />
          ) : (
            <HomeInactive width={24} height={24} />
          )
        ),
        tabBarShowLabel: false,
      }}
       />
       <Tab.Screen
  name="Account"
  component={OnboardingScreen}
  options={{
    tabBarIcon: ({ focused }) => (
      <SettingsIcon
        width={24}
        height={24}
        fill={focused ? '#007aff' : 'gray'} // Dynamic color for active/inactive states
        opacity={focused ? 1 : 0.6} // Reduce opacity for inactive state
      />
    ),
    tabBarShowLabel: false,
  }}
/>
<Tab.Screen 
  name="Cart"
  component={LoginScreen} 
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      focused ? (
        <CartActive width={24} height={24} />
      ) : (
        <CartInactive width={24} height={24} />
      )
    ),
    tabBarShowLabel: false,
  }} 
/>
<Tab.Screen 
  name="Settings"
  component={HomeCategories} 
  options={{
    tabBarIcon: ({ focused, color, size }) => (
      focused ? (
        <AccountActive width={24} height={24} />
      ) : (
        <AccountInactive width={24} height={24} />
      )
    ),
    tabBarShowLabel: false,
  }} 
/>
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;