import { theme } from '@/styles/theme';
import Link from 'next/link';
import styled from 'styled-components';
import { useSession, signIn, signOut } from 'next-auth/react';
import UserProfile from './user-profile';

export default function Navbar() {
	const { data: session, status } = useSession();

	return (
		<NavContainer>
			<Logo>MomentLog</Logo>
			<NavButtons>
				<ThemeBtn_Dark></ThemeBtn_Dark>
				{session ? (
					<UserProfile />
				) : (
					<Link href='/login'>
						<LoginBtn>로그인</LoginBtn>
					</Link>
				)}
			</NavButtons>
		</NavContainer>
	);
}

const NavContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 55px;
	padding: 10px 30px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	z-index: 999;
`;

const NavButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 150px;
	height: 40px;
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${({ theme }) => theme.fontSize.logo}px;
	font-weight: 700;
	width: 140px;
	height: 40px;
	/* padding: 10px; */
`;

const ThemeBtn_Dark = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	cursor: pointer;
`;

const LoginBtn = styled.button`
	width: 80px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 4px;
	cursor: pointer;
`;
