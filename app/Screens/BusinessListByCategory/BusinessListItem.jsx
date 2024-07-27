import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

export default function BusinessListItem({ data }) {
  return (
    <View style={styles.container} >
      <Image source={{ uri: data?.images?.[0].url }} style={styles.imageStyle} />

      <View style={styles.subContainer} >
        <Text style={{fontFamily: 'outfit-regular', fontSize: 14, color: Colors.GREY}} >{data.contactPerson}</Text>
        <Text style={{fontFamily: 'outfit-bold', fontSize: 15}} >{data.name}</Text>
        <Text style={{fontFamily: 'outfit-regular', fontSize: 12, color: Colors.GREY}} > <Entypo name="location-pin" size={20} color={Colors.PRIMARY} /> {data.address}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100
  },
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7
  }
})