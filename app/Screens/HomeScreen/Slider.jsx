import { View, Text } from 'react-native'
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
  const [data, setData] = useState(null);
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
      <Text>Slider</Text>
    </View>
  )
}