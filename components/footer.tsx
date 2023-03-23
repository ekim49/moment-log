import Image from 'next/image';
import styled from 'styled-components';

export default function Footer(): JSX.Element {
	return (
		<FooterContainer>
			<a href='https://github.com/ekim49'>
				<Image
					src='/images/github.png'
					height={20}
					width={20}
					alt='Github Link'
				/>
			</a>
			<FooterText>2023 ekim49</FooterText>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	padding: 10px 30px;
	border-top: 1px solid ${({ theme }) => theme.colors.grey};
	bottom: 0;
`;

const FooterText = styled.footer`
	margin-left: 20px;
	font-size: ${({ theme }) => theme.fontSize.text_small}px;
`;
