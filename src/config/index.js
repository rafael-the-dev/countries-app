import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://graphqlcountries.com/',//https://countries.trevorblades.com/ 
    cache: new InMemoryCache()
});