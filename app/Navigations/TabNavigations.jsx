import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Colors } from '../../constants/Colors'
import HomeNavigation from './HomeNavigation'
import BookingNavigation from './BookingNavigation'
import ProfileNavigation from './ProfileNavigation'
const Tab = createBottomTabNavigator();

export default function TabNavigations() {
    const tabBarOptions = true;
  return (
    <Tab.Navigator 
    
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'settings';
          }else{
            iconName = 'list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        // headerShown: false
      })}
      tabBarOptions={{
        activeTintColor: Colors.PRIMARY,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigation} options={{headerShown: false}} />
      <Tab.Screen name="Booking" component={BookingNavigation} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={ProfileNavigation} options={{headerShown: false}} />
    </Tab.Navigator> 
  )
}