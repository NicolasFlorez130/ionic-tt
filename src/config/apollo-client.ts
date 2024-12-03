import { ApolloClient, InMemoryCache } from '@apollo/client';

export const API_URL = 'https://api.escuelajs.co/graphql';

export const client = new ApolloClient({
   uri: API_URL,
   cache: new InMemoryCache(),
});
