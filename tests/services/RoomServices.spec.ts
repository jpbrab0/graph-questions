import { RoomService } from '../../src/services/RoomService';
import { RoomRepositoryStub } from './mock/RoomRepositoryStub';

function makeSut() {
	const repository = new RoomRepositoryStub();
	const sut = new RoomService(repository);
	return { sut, repository };
}

describe('RoomService', () => {
	describe('RoomService Create', () => {
		it('should create a room', async () => {
			const data = { name: 'valid_name', password: 'valid_password' };
			const { sut } = makeSut();

			const response = await sut.create(data);

			expect(response).toBe(true);
		});

		it('should call repository.create with correct params', async () => {
			const data = { name: 'valid_name', password: 'valid_password' };
			const { sut, repository } = makeSut();
			const spy = jest.spyOn(repository, 'create');
			await sut.create(data);

			expect(spy).toBeCalledTimes(1);
			expect(spy).toBeCalledWith(data.name, data.password);
		});

		it('should return false on throw error', async () => {
			const data = { name: 'valid_name', password: 'valid_password' };
			const { sut, repository } = makeSut();
			const spy = jest.spyOn(repository, 'create');

			spy.mockImplementation(() => {
				throw new Error();
			});

			const response = await sut.create(data);

			expect(spy).toThrow();
			expect(response).toBe(false);
		});
	});

	describe('RoomService Get', () => {
		it('should get a room', async () => {
			const id = 'valid_id';
			const { sut } = makeSut();

			const response = await sut.get(id);

			expect(response).toBe(undefined);
		});

		it('should call repository.get with correct params', async () => {
			const id = 1;
			const { sut, repository } = makeSut();
			const spy = jest.spyOn(repository, 'get');

			await sut.get(id);

			expect(spy).toBeCalledTimes(1);
			expect(spy).toBeCalledWith(id);
		});

		it('should return false on throw error', async () => {
			const id = 'valid_id';
			const { sut, repository } = makeSut();
			const spy = jest.spyOn(repository, 'get');

			spy.mockImplementation(() => {
				throw new Error();
			});

			const response = await sut.get(id);

			expect(spy).toThrow();
			expect(response).toBe(false);
		});
	});

	describe('RoomService Delete', () => {
		it('should delete a room', async () => {
			const id = '1';
			const { sut } = makeSut();

			const response = await sut.delete(id);

			expect(response).toBe(true);
		});

		it('should call repository.delete with correct params', async () => {
			const id = 1;
			const { sut, repository } = makeSut();
			const spy = jest.spyOn(repository, 'get');

			await sut.get(id);

			expect(spy).toBeCalledTimes(1);
			expect(spy).toBeCalledWith(id);
		});

		it('should return false on throw error', async () => {
			const id = 'valid_id';
			const { sut, repository } = makeSut();
			const spy = jest.spyOn(repository, 'delete');

			spy.mockImplementation(() => {
				throw new Error();
			});

			const response = await sut.delete(id);

			expect(spy).toThrow();
			expect(response).toBe(false);
		});
	});
});
