import { gql, ApolloClient, InMemoryCache } from '@apollo/client';
const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';
const request = require('requests');

const client = new ApolloClient({
    uri: MASTER_URL,
    cache: new InMemoryCache()
});



const userBookings = async (userEmail) => {
    const query = gql`
        query MyQuery($userEmail: String) {
                bookings(orderBy: publishedAt_DESC, where: {userEmail: $userEmail}) {
                    date
                    time
                    userEmail
                    userName
                    bookingStatus
                    id
                    business {
                    address
                    contactPerson
                    email
                    id
                    images {
                        url
                    }
                    name
                    about
                    }
                }
            }
        `

    try {
        const { data } = await client.query({
            query: query,
            variables: { userEmail: userEmail }
        });
        // console.log("data: ", data)
        return data;
    } catch (error) {
        console.error('Error fetching businessListByCategory.js:', error);
        throw error;
    }
};


export default userBookings;