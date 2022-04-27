import { PrismaClient } from '@prisma/client';

export interface IRoomRepository {
	create(name: string, password?: string): Promise<void>;
	get(id: number): Promise<any>;
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

	async get(id: number): Promise<any> {
		return this.prisma.room.findUnique({
			where: {
				id,
			},
			include: {
				questions: true,
			},
		});
	}

	async delete(id: number): Promise<void> {
		await this.prisma.room.delete({ where: { id } });
	}
}
