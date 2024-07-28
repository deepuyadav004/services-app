import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/clyu45zag01of06w9vm8jst62/master';

const client = new ApolloClient({
    uri: MASTER_URL,
    cache: new InMemoryCache()
});



const addBooking = async ({ date, time, userEmail, userName, businessId }) => {
    const CREATE_BOOKING_MUTATION = gql`
    mutation MyMutation($userEmail: String, $userName: String, $time: String, $date: String, $businessId: ID) {
        createBooking(
            data: {bookingStatus: booked, date: $date, time: $time, userEmail: $userEmail, userName: $userName, business: {connect: {id: $businessId}}}
        ) {
            id
        }
        publishManyBookings(to: PUBLISHED) {
            count
        }
    }
`;

    try {
        const { data } = await client.mutate({
            mutation: CREATE_BOOKING_MUTATION,
            variables: {
                bookingStatus: "Booked",  // Include the bookingStatus here if needed
                date,
                time,
                userEmail,
                userName,
                businessId
            }
        });
        return data;
    } catch (error) {
        if (error.graphQLErrors) {
            console.error('GraphQL Errors:', error.graphQLErrors);
        }
        if (error.networkError) {
            console.error('Network Error:', error.networkError);
        }
        console.error('Error in adding new booking:', error.message);
        throw error;
    }
};

export default addBooking;
