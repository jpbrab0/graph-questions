async function createQuestion(parent, args, { prisma }) {
	const { question, roomId } = args.data;
	const parsedId = parseInt(roomId);
	try {
		console.log('Inserting question in the database');
		console.log(question);
		await prisma.question.create({
			data: {
				question,
				roomId: parsedId,
			},
		});
		console.log('Question entered successfully!');
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}

async function readQuestion(_, { id }, { prisma }) {
	try {
		const parsedId = parseInt(id);

		await prisma.question.update({
			where: {
				id: parsedId,
			},
			data: {
				read: true,
			},
		});

		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}

async function deleteQuestion(_, { id }, { prisma }) {
	try {
		const parsedId = parseInt(id);

		await prisma.question.delete({
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

export { createQuestion, readQuestion, deleteQuestion };
