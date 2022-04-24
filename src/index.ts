import { ApolloServer } from 'apollo-server';
import { context } from './context';
import { resolvers, typeDefs } from './entities/schema';

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context,
});

server.listen().then(({ url }) => {
	return console.log(`Server está on! ${url}`);
});
