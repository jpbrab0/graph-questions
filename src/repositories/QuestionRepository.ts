import { PrismaClient } from '@prisma/client';

export interface IQuestionRepository {
	create(question: string, roomId: number): Promise<void>;
	read(id: number): Promise<void>;
	delete(id: number): Promise<void>;
}

export class QuestionRepository implements IQuestionRepository {
	constructor(private prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create(question: string, roomId: number): Promise<void> {
		await this.prisma.question.create({
			data: {
				question,
				roomId,
			},
		});
	}

	async read(id: number): Promise<void> {
		await this.prisma.question.update({
			where: {
				id,
			},
			data: {
				read: true,
			},
		});
	}

	async delete(id: number): Promise<void> {
		await this.prisma.question.delete({ where: { id } });
	}
}
