import { prisma } from '../../prisma';
import { RoomRepository } from '../../repositories/RoomRepository';
import { RoomService } from '../../services/RoomService';

const roomRepository = new RoomRepository(prisma);
const service = new RoomService(roomRepository);

export const roomResolver = {
	Mutation: {
		createRoom: async (_, { data }) => service.create(data),
		deleteRoom: async (_, { id }) => service.delete(id),
	},

	Query: {
		getRoomInfo: (_, { id }) => service.get(id),
	},
};
