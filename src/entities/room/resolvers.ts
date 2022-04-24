import { context } from '../../context';
import { RoomRepository } from '../../repositories/RoomRepository';
import { RoomService } from '../../services/RoomService';

const roomRepository = new RoomRepository(context.prisma);
const service = new RoomService(roomRepository);

export const roomResolver = {
	Mutation: {
		createRoom: async (_, args, __) => {
			const { data } = args;
			return service.create(data);
		},
		deleteRoom: async (_, { id }, __) => {
			return service.delete(id);
		},
	},

	Query: {
		getRoomInfo: (_, { id }, __) => {
			return service.get(id);
		},
	},
};
