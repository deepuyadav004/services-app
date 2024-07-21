// import { gql, request } from 'graphql-request'
// import { request } from 'graphql'
// import { gql } from '@apollo/client'
// import gql from 'graphql-tag';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
    uri: MASTER_URL, // Replace with your GraphQL endpoint
    cache: new InMemoryCache()
  });

const getSlider = () =>  {
    
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
        const data = fetchData().then(data => {
            // console.log('Data:', data);
          }).catch(error => {
            // console.error('Error:', error);
          });
    // const result = await request(MASTER_URL, query)
    return data;
}

export default getSlider
