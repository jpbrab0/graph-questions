import { IRoomRepository } from '../repositories/RoomRepository';

type CreateProps = {
	name: string;
	password?: string;
};

interface IRoomService {
	create({ name, password }: CreateProps): Promise<boolean>;
	get(id: any): Promise<any>;
	delete(id: any): Promise<boolean>;
}

export class RoomService implements IRoomService {
	constructor(private repository: IRoomRepository) {}

	public async create({ name, password }: CreateProps): Promise<boolean> {
		try {
			await this.repository.create(name, password);

			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	public async get(id: any): Promise<any> {
		try {
			const parseId = parseInt(id);

			return this.repository.get(parseId);
		} catch (e) {
			console.log(e);
			return false;
		}
	}
	public async delete(id: any): Promise<boolean> {
		try {
			const parseId = parseInt(id);
			await this.repository.delete(parseId);

			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}
