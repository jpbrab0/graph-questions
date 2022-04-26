import { prisma } from '../../prisma';
import { QuestionRepository } from '../../repositories/QuestionRepository';
import { QuestionService } from '../../services/QuestionService';

const questionRepository = new QuestionRepository(prisma);
const service = new QuestionService(questionRepository);

export const questionResolver = {
	Mutation: {
		createQuestion: (_, args, __) => {
			const { data } = args;

			return service.create(data);
		},
		readQuestion: (_, { id }, __) => {
			return service.read(id);
		},
		deleteQuestion: (_, { id }, __) => {
			return service.delete(id);
		},
	},
};
