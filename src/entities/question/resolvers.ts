import { prisma } from '../../prisma';
import { QuestionRepository } from '../../repositories/QuestionRepository';
import { QuestionService } from '../../services/QuestionService';

const questionRepository = new QuestionRepository(prisma);
const service = new QuestionService(questionRepository);

export const questionResolver = {
	Mutation: {
		createQuestion: (_, { data }) => service.create(data),
		readQuestion: (_, { id }) => service.read(id),
		deleteQuestion: (_, { id }) => service.delete(id),
	},
};
