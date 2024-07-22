import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import getSlider from '../../../constants/GlobalApis';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import Header from './Header'
import { Colors } from '@/constants/Colors';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
    uri: MASTER_URL, // Replace with your GraphQL endpoint
    cache: new InMemoryCache()
});

export default function Category() {

    const [data, setData] = useState([]); 
    const query = gql`
        query category {
            categories {
                icon {
                url
                }
                name
                id
            }
            }
        `

        const fetchData = async () => {
            try {
              const { data } = await client.query({
                query: query
              });
              return data;
            } catch (error) {
              console.error('Error fetching data:', error);
              throw error;
            }
          };

        //   const result;
        fetchData().then(resp => {
            // console.log('Data:', data);
            setData(resp?.categories);
            console.log("data: ", resp?.categories)
          }).catch(error => {
            console.error('Error:', error);
          });


    useEffect(() => {
      fetchData()
    //   console.log("Data: ", data)
    },[])


  return (
    <View>
      <Text style={styles.heading} >Category for you</Text>
     {/* <Header text={"Category"} viewAll={true} /> */}

      <FlatList
        data={data}
        // horizontal={true}
        numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={{marginRight: 20, flex: 1, alignItems:'center'}} >
            <View style={{backgroundColor:Colors.LIGHT_GREY, borderRadius: 100}} >
                <Image source={{uri:item?.icon?.url}} style={styles.sliderImage} />
            </View>
            <Text style={{marginTop: 5, fontFamily: 'outfit-medium'}} >{item?.name}</Text>
          </View>
        )}
      
      />
    </View>
  )
}


const styles = StyleSheet.create({
    heading:{
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