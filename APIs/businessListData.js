import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
    uri: MASTER_URL,
    cache: new InMemoryCache()
});

const query = gql`
        query MyQuery {
            businessLists {
                about
                address
                category {
                name
                }
                contactPerson
                email
                id
                name
                images {
                url
                }
            }
        }
        `
const fetchBusinessList = async () => {
    try {
        const { data } = await client.query({
            query: query
        });
        // console.log("query data: ", data)
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export default fetchBusinessList;