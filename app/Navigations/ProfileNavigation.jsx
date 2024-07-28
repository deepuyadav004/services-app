import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import BusinessListByCategory from '../Screens/BusinessListByCategory/BusinessListByCategory';
import BusinessDetailScreen from '../Screens/BusinessDetailScreen/BusinessDetailScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} >
        <Stack.Screen name='profile-screen' component={ProfileScreen} />
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='booking-screen' component={BookingScreen} />
    </Stack.Navigator>
  )
}