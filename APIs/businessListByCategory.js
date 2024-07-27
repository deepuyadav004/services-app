import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
    uri: MASTER_URL,
    cache: new InMemoryCache()
});



const fetchBusinessListByCategory = async (category) => {
    const query = gql`
        query MyQuery($categoryName: String) {
                businessLists(where: {category_every: {name: $categoryName}}) {
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

    try {
        const { data } = await client.query({
            query: query,
            variables: { categoryName: category }
        });
        console.log("adfas: ", data)
        return data;
    } catch (error) {
        console.error('Error fetching businessListByCategory.js:', error);
        throw error;
    }
};


export default fetchBusinessListByCategory;