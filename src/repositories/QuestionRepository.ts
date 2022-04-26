/* eslint-disable no-unused-vars */

import { PrismaClient } from '@prisma/client';

interface CreateReturnType {
	id: number;
	question: string;
	read: boolean;
	roomId: number;
}

export interface IQuestionRepository {
	create(question: string, roomId: number);
	read(id: number);
	delete(id: number);
}

export class QuestionRepository implements IQuestionRepository {
	constructor(private prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create(question: string, roomId: number) {
		await this.prisma.question.create({
			data: {
				question,
				roomId,
			},
		});
	}

	async read(id: number) {
		await this.prisma.question.update({
			where: {
				id,
			},
			data: {
				read: true,
			},
		});
	}

	async delete(id: number) {
		await this.prisma.question.delete({
			where: {
				id: id,
			},
		});
	}
}
