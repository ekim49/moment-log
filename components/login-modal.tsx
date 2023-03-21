import Image from 'next/image';
import styled from 'styled-components';
import type { ILoginModalProps } from './navbar';

export default function LoginModal({ toggleModal }: ILoginModalProps) {
	return (
		<>
			<Background>
				<ModalContainer>
					<ModalImg>
						<Image
							src='/images/login.png'
							alt='Login Modal Image'
							width={250}
							height={300}
						/>
						<p>
							<a href='https://storyset.com/mobile'>
								Mobile illustrations by Storyset
							</a>
						</p>
					</ModalImg>
					<ModalContent>
						<CloseBtn onClick={toggleModal}>
							<Image
								src='/icons/close.png'
								alt='Close Modal Button'
								width={15}
								height={15}
							/>
						</CloseBtn>
						<h1>Sign in</h1>
						<OAuthLoginLabel>소셜 계정으로 로그인</OAuthLoginLabel>
						<OAuthBtnContainer>
							<Image
								src='/images/google.png'
								alt='Google Login Button'
								width={55}
								height={55}
							/>
							<Image
								src='/images/kakao.png'
								alt='Google Login Button'
								width={55}
								height={55}
							/>
							<Image
								src='/images/github.png'
								alt='Google Login Button'
								width={55}
								height={55}
							/>
						</OAuthBtnContainer>
						<SignupLinkContainer>
							<OAuthLoginLabel>아직 회원이 아니신가요?</OAuthLoginLabel>
							<a>회원 가입</a>
						</SignupLinkContainer>
					</ModalContent>
				</ModalContainer>
			</Background>
		</>
	);
}

const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	/* z-index: 999; */
	background-color: rgba(0, 0, 0, 0.1);
`;

const ModalContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	position: fixed;
	border-radius: 8px;
	width: 600px;
	height: 400px;
	background-color: ${({ theme }) => theme.colors.white};
	z-index: 999;
	box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
`;

const ModalImg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e0e0e0;
	width: 280px;
	height: inherit;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	> p {
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.text_small}px;
		/* position: relative; */
		/* margin-top: -20px;
		z-index: 100; */
		/* text-align: end; */
	}
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 320px;
	height: inherit;
	padding: 35px 30px;
	> h1 {
		font-size: ${({ theme }) => theme.fontSize.title}px;
		font-weight: 500;
		margin-bottom: 30px;
	}
`;

const CloseBtn = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	cursor: pointer;
	opacity: 0.5;
`;

const OAuthLoginLabel = styled.div`
	color: ${({ theme }) => theme.colors.gray};
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSize.text}px;
	margin: 10px 0px;
`;

const OAuthBtnContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 260px;
	height: 70px;
	/* margin: 30px 0px; */
	border: none;
`;

const SignupLinkContainer = styled.div`
	margin-top: 50px;
	font-weight: 500;
`;
