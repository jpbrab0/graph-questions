import { prisma } from '../../prisma';
import { RoomRepository } from '../../repositories/RoomRepository';
import { RoomService } from '../../services/RoomService';

const roomRepository = new RoomRepository(prisma);
const service = new RoomService(roomRepository);

export const roomResolver = {
	Mutation: {
		createRoom: (_, { data }, __) => service.create(data),
		deleteRoom: (_, { id }, __) => service.delete(id),
	},

	Query: {
		getRoomInfo: (_, { id }, __) => service.get(id),
	},
};
