import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BusinessListItem({ data, item }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-detail', {data: data})} >
      {data?.images?.[0]?.url && <Image source={{ uri: data?.images?.[0].url }} style={styles.imageStyle} />}
    
      <View style={styles.subContainer} >
        <Text style={{fontFamily: 'outfit-regular', fontSize: 14, color: Colors.GREY}} >{data?.contactPerson}</Text>
        <Text style={{fontFamily: 'outfit-bold', fontSize: 15}} >{data?.name}</Text>
        <Text style={{fontFamily: 'outfit-regular', fontSize: 12, color: Colors.GREY}} > <Entypo name="location-pin" size={20} color={Colors.PRIMARY} /> {data?.address}</Text>

        {item?.id && <Text>Show Booking</Text>}
      </View>
    </TouchableOpacity>
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