import { useSession } from 'next-auth/react';
import Image from 'next/image';

export interface UserData {
	name: string;
	email: string;
	image: string;
}

export default function MyPage() {
	const { data: session, status } = useSession();
	const { name, email, image } = session?.user as UserData;

	return (
		<>
			<div>Welcome, {name}.</div>
			<div>You are signed in as {email}</div>
			{session && <Image src={image} alt='User Iamge' width={55} height={55} />}
		</>
	);
}
