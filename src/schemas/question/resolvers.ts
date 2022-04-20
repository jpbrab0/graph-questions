import {
	createQuestion,
	readQuestion,
	deleteQuestion,
} from '../../services/QuestionService';

export const questionResolver = {
	Mutation: {
		createQuestion,
		readQuestion,
		deleteQuestion,
	},
};
