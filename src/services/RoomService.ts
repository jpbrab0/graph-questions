/* eslint-disable no-unused-vars */

import { IRoomRepository } from '../repositories/RoomRepository';

type CreateProps = {
	name: string;
	password?: string;
};

interface IRoomService {
	create({ name, password }: CreateProps): Promise<boolean>;
	get(id: any): Promise<object | false>;
	delete(id: any): Promise<boolean>;
}

export class RoomService implements IRoomService {
	constructor(private repository: IRoomRepository) {
		this.repository = repository;
	}

	public async create({ name, password }): Promise<boolean> {
		try {
			this.repository.create(name, password);

			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
	public async get(id: any): Promise<object | false> {
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
			this.repository.delete(parseId);

			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
}
