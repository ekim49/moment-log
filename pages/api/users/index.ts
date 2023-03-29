import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getUsers, createUser, deleteUser } from '@/lib/prisma/users';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method === 'GET') {
			try {
				const users = await getUsers();
				return res.status(200).json(users);
			} catch (error) {
				return res.status(500).json(error);
			}
		}
		if (req.method === 'POST') {
			try {
				const { name, email, imageUrl } = req.body;
				const user = await createUser(name, email, imageUrl);
				return res.status(200).json(user);
			} catch (error) {
				return res.status(500).json(error);
			}
		}
		if (req.method === 'DELETE') {
			try {
				const { id } = req.body;
				const user = await deleteUser(id);
				return res.status(200).json(user);
			} catch (error) {
				return res.status(500).json(error);
			}
		}
	} catch (error) {
		return res.status(500).json(error);
	}
}
