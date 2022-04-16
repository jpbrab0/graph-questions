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

	type Mutation {
		createQuestion(data: QuestionTypes!): Boolean
		readQuestion(id: ID!): Boolean
		deleteQuestion(id: ID!): Boolean
	}

	type Query {
		getQuestion(id: ID!): Question!
	}
`;
