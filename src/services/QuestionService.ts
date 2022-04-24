/* eslint-disable no-unused-vars */
import { IQuestionRepository } from '../repositories/QuestionRepository';

type CreateProps = {
	question: string;
	roomId: any;
};

interface IQuestionService {
	create({ question, roomId }: CreateProps): Promise<boolean>;
	read(id: any): Promise<boolean>;
	delete(id: any): Promise<boolean>;
}

export class QuestionService implements IQuestionService {
	constructor(private repository: IQuestionRepository) {
		this.repository = repository;
	}

	public async create({ question, roomId }): Promise<boolean> {
		try {
			const parsedRoomId = parseInt(roomId);
			this.repository.create(question, parsedRoomId);

			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
	async read(id: any): Promise<boolean> {
		try {
			const parsedId = parseInt(id);
			this.repository.read(parsedId);

			return true;
		} catch (e) {
			throw Error(e);
		}
	}
	async delete(id: any): Promise<boolean> {
		try {
			const parsedId = parseInt(id);
			this.repository.delete(parsedId);

			return true;
		} catch (e) {
			throw Error(e);
		}
	}
}
