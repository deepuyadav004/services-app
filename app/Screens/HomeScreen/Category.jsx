import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import fetchCategory from '../../../APIs/categoryData';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from '../../Components/Header'
import { Colors } from '@/constants/Colors';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
  uri: MASTER_URL, // Replace with your GraphQL endpoint
  cache: new InMemoryCache()
});

export default function Category() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCategory().then(res => {
      setData(res?.categories);
    })
  }, [])


  return (
    <View>
      <Header text={"Category"} viewAll={true} />

      <FlatList
        data={data}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20, flex: 1, alignItems: 'flex-start' }} >
            <View style={{ backgroundColor: Colors.LIGHT_GREY, borderRadius: 100 }} >
              <Image source={{ uri: item?.icon?.url }} style={styles.sliderImage} />
            </View>
            <Text style={{ marginTop: 5, fontFamily: 'outfit-medium' }} >{item?.name}</Text>
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
    width: 50,
    height: 50,
    borderRadius: 100,
    objectFit: 'cover'
  }
})