import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import userBookings from '@/APIs/userBookings';
import { useUser } from '@clerk/clerk-expo';
import BusinessListItem from '../BusinessListByCategory/BusinessListItem';

export default function BookingScreen() {

  const { user } = useUser();
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    dataRenderer()
  }, []);

  const dataRenderer = () => {
    setLoading(true)
    // console.log("first")
    // console.log("outside fn: ", Loading)
    userBookings(user?.primaryEmailAddress?.emailAddress).then(res => {
      setData(res?.bookings)
      setLoading(false)
      // console.log("in function: ", Loading)
    });
  }

  return (
    <View style={{padding: 20, paddingTop: 40}} >
      <Text style={{fontFamily: 'outfit-medium', fontSize: 26}} >My Bookings</Text>

      <View>
        <FlatList
          onRefresh={() => dataRenderer()}
          refreshing={Loading}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <BusinessListItem data={item.business} item={item} />
          )}
        />
      </View>
    </View>
  )
}