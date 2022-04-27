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
	constructor(private repository: IQuestionRepository) {}

	public async create({ question, roomId }): Promise<boolean> {
		try {
			const parsedRoomId = parseInt(roomId);
			await this.repository.create(question, parsedRoomId);

			return true;
		} catch (e) {
			console.log(e);
			return false;
		}
	}
	async read(id: any): Promise<boolean> {
		try {
			const parsedId = parseInt(id);
			await this.repository.read(parsedId);

			return true;
		} catch (error) {
			throw Error(error);
		}
	}
	async delete(id: any): Promise<boolean> {
		try {
			const parsedId = parseInt(id);
			await this.repository.delete(parsedId);

			return true;
		} catch (error) {
			throw Error(error);
		}
	}
}
