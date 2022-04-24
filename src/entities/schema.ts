import { gql } from 'apollo-server';
import { questionResolver } from './question/resolvers';
import { questionSchema } from './question/schema';
import { roomResolver } from './room/resolvers';
import { roomSchema } from './room/schema';

const rootTypeDefs = gql`
	type Mutation {
		_empty: Boolean!
	}

	type Query {
		_empty: Boolean!
	}
`;

const rootResolvers = {
	Mutation: {
		_empty: () => true,
	},
	Query: {
		_empty: () => true,
	},
};

const typeDefs = [rootTypeDefs, roomSchema, questionSchema];
const resolvers = [rootResolvers, roomResolver, questionResolver];

export { typeDefs, resolvers };
