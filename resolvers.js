let message = 'Hello, World!';
const resolvers = {
  Query: {
    hello: () => 'Hi!',
    message:()=>message
  },
  
  Mutation: {
    setMessage: (_, { message }) =>
     {
      return message;
    },
  },
};

module.exports = { resolvers };
