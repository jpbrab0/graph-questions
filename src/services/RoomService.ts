export async function getRoomInfo(_, { id }, { prisma }) {
	const parsedId = parseInt(id);
	try {
		const data = await prisma.room.findUnique({
			where: {
				id: parsedId,
			},
			include: {
				questions: true,
			},
		});

		return data;
	} catch (e) {
		return e;
	}
}

export async function createRoom(_, args, context) {
	const { name, password } = args.data;
	const { prisma } = context;
	try {
		console.log('Inserting room in the database');
		await prisma.room.create({
			data: {
				name,
				password,
				questions: {
					create: [],
				},
			},
		});
		console.log('Room entered successfully!');
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}

export async function deleteRoom(_, { id }, { prisma }) {
	try {
		const parsedId = parseInt(id);

		await prisma.question.deleteMany({
			where: {
				roomId: parsedId,
			},
		});

		await prisma.room.delete({
			where: {
				id: parsedId,
			},
		});

		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}
