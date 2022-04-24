import { gql } from 'apollo-server';

export const roomSchema = gql`
	input RoomInput {
		name: String!
		password: String
	}

	type Room {
		id: ID!
		name: String!
		password: String
		questions: [Question]!
	}

	extend type Mutation {
		createRoom(data: RoomInput): Boolean!
		deleteRoom(id: ID!): Boolean!
	}

	extend type Query {
		getRoomInfo(id: ID): Room
	}
`;
