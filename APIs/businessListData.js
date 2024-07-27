import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
    uri: MASTER_URL,
    cache: new InMemoryCache()
});

const query = gql`
        query getBusinesList {
            businessLists {
                contactPerson
                email
                id
                name
                images {
                url
                }
                address
                about
                category {
                name
                }
            }
        }
        `
const fetchBusinessList = async () => {
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


export default fetchBusinessList;