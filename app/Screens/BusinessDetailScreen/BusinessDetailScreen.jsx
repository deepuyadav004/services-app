import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Colors } from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';
import Header from '@/app/Components/Header';
import BookingModel from './BookingModel'

export default function BusinessDetailScreen() {

  const param = useRoute().params;
  const data = param.data;
  const navigation = useNavigation();
  const [isReadMore, setReadMore] = useState(true);
  const [showModel, setShowModel] = useState(false);

  return (
    <View>
      <ScrollView style={{height: '92%'}} >
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => (navigation.pop())}

        >
          <Ionicons name="arrow-back" size={30} color={'black'} />
        </TouchableOpacity>

        {data?.images?.[0]?.url && <Image source={{ uri: data?.images?.[0]?.url }} style={{ width: '100%', height: 300 }} />}

        <View style={styles.infoContainer} >
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }} >{data?.name}</Text>
          <View style={styles.subContainer} >
            <Text style={{ fontFamily: 'outfit-medium', color: Colors.PRIMARY, fontSize: 20 }} >{data?.contactPerson} ⭐ </Text>
            <Text style={{ color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_LIGHT, padding: 5, borderRadius: 5, fontSize: 14 }} > {data?.category?.[0]?.name}</Text>
          </View>
          <Text style={{ fontFamily: 'outfit-regular', fontSize: 20, color: Colors.GREY }} ><Entypo name="location-pin" size={20} color={Colors.PRIMARY} />  {data?.address}</Text>

          {/* Horizontal Line */}
          <View style={{ borderWidth: 0.4, borderColor: Colors.GREY, marginVertical: 20 }} ></View>

          {/* About me section */}
          <View>
            <Header text={"About me"} />
            <Text
              style={{ fontFamily: 'outfit-regular', color: Colors.GREY, fontSize: 12, lineHeight: 20 }}
              numberOfLines={isReadMore ? 5 : 100}
            >{data?.about}</Text>
            <TouchableOpacity onPress={() => setReadMore(!isReadMore)} >
              <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontFamily: 'outfit-regular' }} > {isReadMore ? 'Read more' : 'Read less'}</Text>
            </TouchableOpacity>
          </View>

          {/* Horizontal Line */}
          <View style={{ borderWidth: 0.4, borderColor: Colors.GREY, marginVertical: 20 }} ></View>

          <View>
            <Header text={"Photos"} />
            <FlatList
              data={data?.images}
              numColumns={2}
              renderItem={({ item }) => (
                <Image source={{ uri: item.url }} style={{ width: '100%', height: 120, flex: 1, borderRadius: 15, margin: 7 }} />
              )}
            />
          </View>
        </View>
      </ScrollView>

      <View style={{display: 'flex', flexDirection: 'row', gap: 8}} >
        <TouchableOpacity style={styles.messageBtn} >
          <Text style={{textAlign: 'center', fontFamily: 'outfit-medium', fontSize: 15}} >Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingBtn} onPress={() => setShowModel(true)} >
          <Text style={{textAlign: 'center', fontFamily: 'outfit-medium', fontSize: 15}} >Book Now</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType='slide'
        visible={showModel}
      >
        <BookingModel hideModel={() => setShowModel(false)} />

      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  backBtnContainer: {
    padding: 20,
    position: 'absolute',
    zIndex: 10
  },
  infoContainer: {
    padding: 20,
    display: 'flex',
    gap: 7
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  messageBtn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1
  },
  bookingBtn: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 99,
    flex: 1
  }
})