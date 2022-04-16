import { gql } from 'apollo-server';

export const roomSchema = gql`
	input RoomInput {
		name: String!
		password: String
	}

	type Room {
		id: ID!
		name: String!
		password: String!
		questions: [Question]!
	}

	type Mutation {
		createRoom(data: RoomInput): Boolean!
		deleteRoom(id: ID!): Boolean!
	}

	type Query {
		getRoomInfo(id: ID): Room
	}
`;
