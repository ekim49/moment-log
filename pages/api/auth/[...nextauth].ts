import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../lib/prisma/index';
import { getUserById } from '@/lib/prisma/users';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID,
			clientSecret: process.env.KAKAO_CLIENT_SECRET,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
	pages: {
		signIn: '/login',
	},
	// callbacks: {
	// 	async signIn({ user, account, profile, email, credentials }) {
	// 		if (user) {
	// 			console.log('user는: ', user);
	// 			console.log('account는: ', account);
	// 			console.log('profile는: ', profile);
	// 			console.log('email은: ', email);
	// 			console.log('credentials는: ', credentials);
	// 		} else {
	// 			console.log('없음');
	// 		}
	// 	},
	// 	async session({ session, token, user }) {
	// 		// if (session) {
	// 		console.log('session은: ', session);
	// 		console.log('token은: ', token);
	// 		console.log('user는: ', user);
	// 		// } else {
	// 		// 	console.log('session 없다');
	// 		// }
	// 	},
	// },
	// callbacks: {
	// 	async signIn({ user }) {
	// 		const registeredUser = await getUserById(user.id);
	// 		return registeredUser ? true : '/signup';
	// 	},
	// },
};

export default NextAuth(authOptions);
