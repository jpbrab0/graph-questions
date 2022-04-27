import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './entities/schema';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	return console.log(`Server está on! ${url}`);
});
