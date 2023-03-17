import { theme } from '@/styles/theme';
import styled from 'styled-components';

const NavContainer = styled.div`
	position: sticky;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 55px;
	padding: 10px 30px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
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
	border: 1px solid ${({ theme }) => theme.colors.gray};
	cursor: pointer;
`;

const LoginBtn = styled.button`
	width: 80px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.colors.gray};
	border-radius: 4px;
	cursor: pointer;
`;

export default function Navbar() {
	return (
		<NavContainer>
			<Logo>MomentLog</Logo>
			<NavButtons>
				<ThemeBtn_Dark></ThemeBtn_Dark>
				<LoginBtn>로그인</LoginBtn>
			</NavButtons>
		</NavContainer>
	);
}
