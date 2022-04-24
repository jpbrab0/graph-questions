import { gql } from 'apollo-server';

export const questionSchema = gql`
	input QuestionTypes {
		question: String!
		roomId: ID!
	}

	type Question {
		id: ID
		question: String
		read: Boolean
		roomId: ID
	}

	extend type Mutation {
		createQuestion(data: QuestionTypes!): Boolean
		readQuestion(id: ID!): Boolean
		deleteQuestion(id: ID!): Boolean
	}

	extend type Query {
		getQuestion(id: ID!): Question!
	}
`;
