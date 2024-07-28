import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Logout from '@/app/Components/Logout'

export default function ProfileScreen() {

  const user = useUser();
  const navigation  = useNavigation();

  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      page: 'home'
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
      page: 'booking-screen'
    },
    {
      id: 4,
      name: "Contact us",
      icon: "mail"
    }
  ]

  return (
    <View >
      <View style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY }} >
        <Text style={{ fontSize: 30, fontFamily: 'outfit-bold', color: Colors.WHITE }} >Profile</Text>

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }} >
          <Image source={{ uri: user?.user?.imageUrl }} style={{ width: 70, height: 70, borderRadius: 99 }} />
          <Text style={{ fontSize: 20, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 8 }} >{user?.user?.fullName}</Text>
          <Text style={{ fontSize: 20, fontFamily: 'outfit-medium', color: Colors.WHITE, marginTop: 8 }} >{user?.user?.primaryEmailAddress?.emailAddress}</Text>
        </View>
      </View>

      <View style={{ paddingTop: 100 }} >
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => navigation.push(item?.page)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 30, paddingHorizontal: 50 }} >
              <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: 'outfit-regular', fontSize: 15 }} >{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <Logout />
      </View>
    </View>
  )
}