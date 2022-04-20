import {
	createRoom,
	deleteRoom,
	getRoomInfo,
} from '../../services/RoomService';

export const roomResolver = {
	Mutation: {
		createRoom,
		deleteRoom,
	},

	Query: {
		getRoomInfo,
	},
};
