import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
import { Colors } from '@/constants/Colors';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
  uri: MASTER_URL, // Replace with your GraphQL endpoint
  cache: new InMemoryCache()
});

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
const fetchCategory = async () => {
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


export default fetchCategory;