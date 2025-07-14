const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { connectToDB } = require('./db');

connectToDB().then(() => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: '*', // Allow all origins
      credentials: true,
    },
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
