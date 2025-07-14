import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Apollo v3 default path
  cache: new InMemoryCache(),
});

export default client;
