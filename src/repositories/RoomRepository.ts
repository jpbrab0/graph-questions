/* eslint-disable no-unused-vars */

import { PrismaClient } from '@prisma/client';

interface GetReturnTypes {
	id: number;
	name: string;
	password?: string;
	questions: Array<{ question: string; roomId: number } | any>;
}

export interface IRoomRepository {
	create(name: string, password?: string): Promise<void>;
	get(id: number): Promise<GetReturnTypes>;
	delete(id: number): Promise<void>;
}

export class RoomRepository implements IRoomRepository {
	constructor(private prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async create(name: string, password?: string): Promise<void> {
		await this.prisma.room.create({
			data: {
				name,
				password,
				questions: {
					create: [],
				},
			},
		});
	}

	async get(id: number): Promise<GetReturnTypes> {
		return await this.prisma.room.findUnique({
			where: {
				id,
			},
			include: {
				questions: true,
			},
		});
	}

	async delete(id: number): Promise<void> {
		await this.prisma.room.delete({
			where: {
				id: id,
			},
		});
	}
}
