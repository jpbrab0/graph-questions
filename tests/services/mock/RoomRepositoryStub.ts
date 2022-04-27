import { IRoomRepository } from '../../../src/repositories/RoomRepository';

export class RoomRepositoryStub implements IRoomRepository {
	async create(name: string, password?: string): Promise<void> {}
	async delete(id: number): Promise<void> {}

	async get(id: number): Promise<any> {
		return Promise.resolve(undefined);
	}
}
