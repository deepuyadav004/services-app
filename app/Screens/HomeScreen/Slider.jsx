import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import fetchOffers from '../../../APIs/offersData';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
  uri: MASTER_URL, // Replace with your GraphQL endpoint
  cache: new InMemoryCache()
});


export default function Slider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchOffers().then(res => {
      setData(res?.sliders);
    })
  }, [])

  return (
    <View>
      <Text style={styles.heading} >Offers for you</Text>

      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }} >
            <Image source={{ uri: item?.image?.url }} style={styles.sliderImage} />
          </View>
        )}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    marginBottom: 10
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: 'cover'
  }
})