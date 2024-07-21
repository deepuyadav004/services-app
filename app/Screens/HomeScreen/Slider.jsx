import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import getSlider from '../../../constants/GlobalApis';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
    uri: MASTER_URL, // Replace with your GraphQL endpoint
    cache: new InMemoryCache()
  });


export default function Slider() {
  const [data, setData] = useState([]); 
  const query = gql`
        query getSlider {
            sliders {
                name
                id
                image {
                url
                }
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
            setData(resp?.sliders);
            // console.log("data: ", resp?.sliders)
          }).catch(error => {
            // console.error('Error:', error);
          });

  // const getSliders = () => {
  //     getSlider().then(res=>{
  //         console.log("resp ", res)
  //     })
  // }

    useEffect(() => {
      fetchData()
    },[])

    

  return (
    <View>
      <Text style={styles.heading} >Offers for you</Text>

      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={{marginRight: 20}} >
            <Image source={{uri:item?.image?.url}} style={styles.sliderImage} />
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
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: 'cover'
  }
})