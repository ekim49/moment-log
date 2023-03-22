import Image from 'next/image';
import Link from 'next/link';
import {
	Background,
	Container,
	ContainerImg,
	ContainerContent,
	ContainerLink,
	OAuthLabel,
	OAuthBtnContainer,
} from './login';

export default function SignUp() {
	return (
		<>
			<Background>
				<Container>
					<ContainerImg>
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
					</ContainerImg>
					<ContainerContent>
						<h1>Sign up</h1>
						<OAuthLabel>소셜 계정으로 회원가입</OAuthLabel>
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
						<ContainerLink>
							<OAuthLabel>이미 회원이신가요?</OAuthLabel>
							<Link href='/login'>로그인</Link>
						</ContainerLink>
					</ContainerContent>
				</Container>
			</Background>
		</>
	);
}
