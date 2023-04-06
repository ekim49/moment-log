import prisma from '.';

export async function getUsers() {
	try {
		const users = await prisma.user.findMany();
		return { users };
	} catch (error) {
		return { error };
	}
}

export async function getUserById(id: string) {
	try {
		const user = await prisma.user.findUnique({ where: { id } });
		return { user };
	} catch (error) {
		return null;
	}
}

export async function createUser(name: string, email: string, image: string) {
	try {
		const user = await prisma.user.create({
			data: {
				name,
				email,
				image,
				bookmarks: [],
			},
		});
		return { user };
	} catch (error) {
		return { error };
	}
}

export async function deleteUser(id: string) {
	try {
		const user = await prisma.user.delete({ where: { id } });
		return { user };
	} catch (error) {
		return { error };
	}
}
