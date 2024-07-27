import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Category from './Category'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <ScrollView>

      {/* Header */}
      <Header />

      <View style={{ padding: 20 }} >
        {/* Slider */}
        <Slider />
      </View>

      <View style={{ padding: 20 }}>
        <Category />
      </View>

      {/* Business List */}
      <View style={{paddingHorizontal: 20}} >
        <BusinessList />
      </View>
    </ScrollView>
  )
}