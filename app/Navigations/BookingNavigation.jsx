import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BusinessDetailScreen from '../Screens/BusinessDetailScreen/BusinessDetailScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';

const Stack = createStackNavigator();

export default function BookingNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} >
        <Stack.Screen name='booking-screen' component={BookingScreen} />
        <Stack.Screen name='business-detail' component={BusinessDetailScreen} />
    </Stack.Navigator>
  )
}