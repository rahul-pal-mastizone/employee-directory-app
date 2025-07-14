const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { connectToDB } = require('./db');

// Use Render's required port
const PORT = process.env.PORT || 4000;

connectToDB().then(() => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  server.listen({ port: PORT, path: '/graphql' }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
