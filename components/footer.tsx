import Image from 'next/image';
import styled from 'styled-components';

const FooterContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 50px;
	padding: 10px 30px;
	border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

const FooterText = styled.footer`
	margin-left: 20px;
	font-size: ${({ theme }) => theme.fontSize.text_small}px;
`;

export default function Footer(): JSX.Element {
	return (
		<FooterContainer>
			<a href='https://github.com/ekim49'>
				<Image
					src='/images/github.svg'
					height={20}
					width={20}
					alt='Github Link'
				/>
			</a>
			<FooterText>2023 ⓒ ekim49</FooterText>
		</FooterContainer>
	);
}
