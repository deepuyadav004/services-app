import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {

  const user = useUser();

  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home"
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp"
    },
    {
      id: 3,
      name: "Logout",
      icon: "log-out"
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
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 30, paddingHorizontal: 50 }} >
              <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: 'outfit-regular', fontSize: 15 }} >{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}